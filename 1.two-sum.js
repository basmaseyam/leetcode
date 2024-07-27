/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length; i++){
        let complement = target - nums[i];
        if (nums.includes(complement)){
            if(nums.indexOf(complement) != i){
                return [i, nums.indexOf(complement)];
            }
        
         
        }


    }
};
// @lc code=end

