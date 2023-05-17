
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract PartnerNftStaking is Ownable, IERC721Receiver {
       using SafeERC20 for IERC20;
       using EnumerableSet for EnumerableSet.AddressSet;
        using EnumerableSet for EnumerableSet.UintSet;
        struct UserInfo {
        EnumerableSet.AddressSet stakedNftsAdd;
        EnumerableSet.UintSet stakedNfts;
        uint256 unpaid;
        uint256 lastRewardTime;
    }
       IERC721 public  stakingNft;

       /// @dev Reward Token address

    IERC20 public immutable rewardToken;

    /// @dev Max NFTs that a user can stake
    uint256 public maxLimit = 1e4;

    /// @dev Reward amount per day
    uint256 public emission;

    /// @dev Total staked supply
    uint256 public totalStaked;



    mapping(address => UserInfo) private _userInfo;

        event MaxLimitUpdated(uint256 limit);
    event EmissionUpdated(uint256 emission);
    event Staked(address indexed account, uint256[] ids, address[] nftAddress);
    event Withdrawn(address indexed account, uint256[] ids,address[] nftAddress);
    event Harvested(address indexed account, uint256 paid, uint256 unpaid);
     constructor(
        // address payable  _stakingNft,
        address payable _rewardToken,
        uint256 _emission
    ) {
        IERC20(_rewardToken).balanceOf(address(this));
        // IERC721(_stakingNft).balanceOf(address(this));

        // stakingNft = IERC721(_stakingNft);
        rewardToken = IERC20(_rewardToken);
        emission = _emission;
    }

       /// @dev Update max nft count available per user
    function updateMaxLimit(uint256 _limit) external onlyOwner {
        require(_limit > 0, "Invalid value");
        maxLimit = _limit;
    }

    /// @dev Update emission value
    function updateEmission(uint256 _emission) external onlyOwner {
        emit EmissionUpdated(_emission);
        emission = _emission;
    }

   /// @dev View user info
    function viewUserInfo(address _account)
        external
        view
        returns (
            uint256, // Unpaid rewards (not paid in the last harvest)
            uint256, // Last reward time
            uint256 // Total staked count
        )
    {
        UserInfo storage user = _userInfo[_account];
        return (user.unpaid, user.lastRewardTime, user.stakedNfts.length());
    }


  /// @dev Calculate pending rewads of the user
    function pendingRewards(address _account) public view returns (uint256) {
        UserInfo storage user = _userInfo[_account];

        uint256 pending = 0;
        if (user.lastRewardTime < block.timestamp) {
            pending =
                ((block.timestamp - user.lastRewardTime) *
                    user.stakedNfts.length() *
                    emission) /
                1 days;
        }

        return pending + user.unpaid;
    }


function isStaked(address _account, uint256 _id, address _contractAd) public view returns (bool) {

    return _userInfo[_account].stakedNfts.contains(_id) && _userInfo[_account].stakedNftsAdd.contains(_contractAd);

}



   function harvest() external {
        UserInfo storage user = _userInfo[_msgSender()];
        uint256 pending = pendingRewards(_msgSender());
        if (pending > 0) {
            uint256 amountSent = safeRewardTransfer(_msgSender(), pending);
            user.unpaid = pending - amountSent;

            emit Harvested(_msgSender(), amountSent, pending - amountSent);
        }
        user.lastRewardTime = block.timestamp;
    }





       function stake(uint256[] memory _ids ,address[] memory _stakingAddress) external {
       
        UserInfo storage user = _userInfo[_msgSender()];
        uint256 countToStake = _ids.length;

        require(
            countToStake > 0 &&
                user.stakedNfts.length() + countToStake <= maxLimit,
            "Invalid amount"
        );

        // user.unpaid = pendingRewards(_msgSender());

        for (uint256 i = 0; i < countToStake; i++) {
             stakingNft =IERC721(_stakingAddress[i]);
            stakingNft.safeTransferFrom(_msgSender(), address(this), _ids[i]);
            user.stakedNfts.add(_ids[i]);
            user.stakedNftsAdd.add(_stakingAddress[i]);
        }

        totalStaked += countToStake;
        user.lastRewardTime = block.timestamp;

        emit Staked(_msgSender(), _ids,_stakingAddress);
    }

function getStakedNftsByUser(address user) public view returns (address[] memory, uint256[] memory) {
    uint256 numNfts = _userInfo[user].stakedNfts.length();
    address[] memory nftAddresses = new address[](_userInfo[user].stakedNftsAdd.length());
    uint256[] memory nftIds = new uint256[](numNfts);
    for (uint256 i = 0; i < numNfts; i++) {
        nftIds[i] = _userInfo[user].stakedNfts.at(i);
    }
    uint256 j = 0;
    for (uint256 i = 0; i < _userInfo[user].stakedNftsAdd.length(); i++) {
        address nftAddress = _userInfo[user].stakedNftsAdd.at(i);
        if (_userInfo[user].stakedNftsAdd.contains(nftAddress)) {
            nftAddresses[j] = nftAddress;
            j++;
        }
    }
    return (nftAddresses, nftIds);
}



   /// @notice Withdraw nfts from the staking pool
    function unstack(uint256[] memory _ids, address[] memory _stakingAddress) external {
        UserInfo storage user = _userInfo[_msgSender()];
        uint256 countToWithdraw = _ids.length;
        require(countToWithdraw > 0, "Invalid zero amount");

        // user.unpaid = pendingRewards(_msgSender());

        for (uint256 i = 0; i < countToWithdraw; i++) {
              stakingNft =IERC721(_stakingAddress[i]);

            require(user.stakedNfts.contains(_ids[i]), "Not owned");
            stakingNft.safeTransferFrom(address(this), _msgSender(), _ids[i]);
            user.stakedNfts.remove(_ids[i]);
            user.stakedNftsAdd.remove(_stakingAddress[i]);
        }

        totalStaked -= countToWithdraw;
        user.lastRewardTime = block.timestamp;

        emit Withdrawn(_msgSender(), _ids,_stakingAddress);
    }


   /// @notice Safe transfer rewards to the user
    /// @return : real amount transferred
    function safeRewardTransfer(address _to, uint256 _amount)
        internal
        returns (uint256)
    {
        uint256 bal = rewardToken.balanceOf(address(this));
        _amount = bal >= _amount ? _amount : bal;
        if (_amount > 0) rewardToken.safeTransfer(_to, _amount);
        return _amount;
    }


    /**
     * @notice It allows the admin to recover wrong tokens sent to the contract
     * @dev This function is only callable by admin.
     */
    function recoverTokens(address _token, uint256 _amount) external onlyOwner {
        IERC20(_token).safeTransfer(_msgSender(), _amount);
    }





 function onERC721Received(
        address,
        address,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC721Received.selector;
    }



}

