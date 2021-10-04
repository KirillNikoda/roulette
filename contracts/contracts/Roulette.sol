//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract Roulette {
    mapping(address => mapping(address => uint256)) public userDeposit;

    function deposit(address _tokenAddress, uint256 _amount) public returns(bool success) {
        userDeposit[msg.sender][_tokenAddress] = userDeposit[msg.sender][_tokenAddress] + _amount;
        IERC20 token = IERC20(_tokenAddress);
        token.transferFrom( msg.sender, address(this), _amount );
        return true;
    }

    function withdraw(address _tokenAddress, uint256 _amount) public returns(bool success) {
        require(userDeposit[msg.sender][_tokenAddress] >= _amount);

        require(IERC20(_tokenAddress).transfer(msg.sender, _amount));

        return true;
    }
}
