// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract nftSwap {
  struct Swap {
        address from;
        address to;
        address tokenContract;
        uint256 tokenId;
        bool isCompleted;
    }


mapping (uint256 => Swap) public _swaps;

    event SwapCreated(
        uint256 swapId,
        address indexed from,
        address indexed to,
        address indexed tokenContract,
        uint256 tokenId
    );
     event SwapCompleted(uint256 swapId);

     function CreateSwap (address _to , address _tokenContract , uint256 _tokenId)external{

         require(IERC721(_tokenContract).ownerOf(_tokenId)== msg.sender,'you must own the token');
         uint256 swapId =  uint256(keccak256(abi.encodePacked(msg.sender, _to, _tokenContract, _tokenId)));
         _swaps[swapId] = Swap(msg.sender,_to,_tokenContract,_tokenId,false);
         emit SwapCreated(swapId,msg.sender,_to,_tokenContract,_tokenId);
}

function AcceptSwap (uint256 swapId) external{
    Swap storage swap= _swaps[swapId];
    require(!swap.isCompleted, "Swap already completed");
    require(swap.to == msg.sender, "You are not the intended recipient");
    IERC721(swap.tokenContract).transferFrom(swap.from, swap.to, swap.tokenId);
     swap.isCompleted = true;

    emit SwapCompleted(swapId);


}

function CancelSwap (uint256 _swapId) external {
     Swap storage swap = _swaps[_swapId];
        require(!swap.isCompleted, "Swap already completed");
        require(
            swap.from == msg.sender || swap.to == msg.sender,
            "You are not the swap creator or recipient"
        );

        IERC721(swap.tokenContract).transferFrom(address(this), swap.from, swap.tokenId);

        delete _swaps[_swapId];
}


}