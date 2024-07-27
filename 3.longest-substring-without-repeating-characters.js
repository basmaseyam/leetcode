/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let dict ={};
   let start=0;
   let end=0;
   let counter = 0;

   while ((start<s.length)&&(end<s.length)) {
    let char=s[end];
        if (dict[char]!=null) {
            start= Math.max(start,dict[char]+1);
        }
        dict[char]=end;
        counter=Math.max(counter, end-start+1);
        end++;
   }
   return counter;
 };
// @lc code=end

