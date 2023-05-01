  // SPDX-License-Identifier: MIT
  pragma solidity ^0.8.4;

  import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

  contract Exchange is ERC20 {
    address public CryptoDevAddress;

    constructor(address _CryptoDevAddress) ERC20("CryptoDev", "CDV") {
      CryptoDevAddress = _CryptoDevAddress;
    }
    function getReverse() public view returns (uint256) {
      ERC20(CryptoDevAddress).balanceOf(address(this));
    }

  }