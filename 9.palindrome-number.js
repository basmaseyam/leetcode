/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = x.toString();
    let l = s.length;
    for(let i = 0; i < l/2 ; i++){
        if(s[i] !== s[l - 1 - i]){ 
            return false;
            }
    }
    return true;
};

// @lc code=end

