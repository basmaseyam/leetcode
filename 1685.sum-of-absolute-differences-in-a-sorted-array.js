/*
 * @lc app=leetcode id=1685 lang=javascript
 *
 * [1685] Sum of Absolute Differences in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let result=[];
    let left_sum=0;
    let right_sum=0;
    let total_sum=0;


    for(let i=0;i<nums.length;i++){
        if(i!==0){
            let nums_left=nums.slice(0,i);
            left_sum=nums[i]*i - nums.reduce((accumulator, currentValue)=>{
                return accumulator + currentValue;
            },0);
            console.log(left_sum);
        }
        if(i!==nums.length-1){
            let nums_right=nums.slice(i+1,nums.length);
            right_sum=nums.reduce((accumulator, currentValue)=>{
                return accumulator + currentValue;
            },0) - nums[i]*(nums.length-1-i);
            console.log(right_sum);
        }
       result[i]=right_sum+left_sum;

                }
              
    
    return result;
};


// @lc code=end

