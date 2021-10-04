//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract Roulette {
    mapping(address => mapping(address => uint256)) public userDeposit;

    function deposit(address tokenAddress, uint256 amount) public returns(bool success) {
        userDeposit[msg.sender][tokenAddress] = userDeposit[msg.sender][tokenAddress] + amount;
        IERC20 token = IERC20(tokenAddress);
        token.transferFrom( msg.sender, address(this), amount );
        return true;
    }

    function withdraw() public returns(bool success) {
        
    }
}
