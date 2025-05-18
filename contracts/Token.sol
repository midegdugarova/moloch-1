// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;


import "./ERC20.sol";

contract Token is ERC20 {
  constructor(uint256 supply) {
    _mint(msg.sender, supply);
  }
}
