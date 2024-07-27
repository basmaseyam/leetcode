/*
 * @lc app=leetcode id=11 lang=rightavascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    max=0;
    let left=0;
    let right=height.length-1;
    while(left < right)
    {  
            area = (right-left)*Math.min(height[left], height[right]);
            
            if (area>max){
                max=area;
            }

            height[left]<=height[right] ? left++ : right--;
               
    }
    

    return max;
       
};
// @lc code=end

