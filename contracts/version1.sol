//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Version1{
    uint public val;
        // constructor(uint _val) {
    //     val = _val;
    // }
    function initialize(uint _val) external{
        val = _val;
    }
    function addValuePlusOne(uint _val) external {
        val += _val+1;
    }
}