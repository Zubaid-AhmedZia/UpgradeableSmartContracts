// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Version2 {
    
    uint public val;
    uint public val2;
    // function initialize(uint _val) external {
    //     val = _val;
    // }
    function increamentTwo() external {
        val += 2;
    }
    function inc() external {
        val += 1;
    }
  
    function incVal2() external {
        val2 += 1;
    }
}