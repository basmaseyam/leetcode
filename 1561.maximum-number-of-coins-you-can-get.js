/*
 * @lc app=leetcode id=1561 lang=javascript
 *
 * [1561] Maximum Number of Coins You Can Get
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    const n = piles.length;
    let counter=0;
    let i=0;
    let j= n-1;
    piles.sort((a,b)=>b-a);
   while(i<j){
    pile=[piles[i],piles[i+1],piles[j]];
    console.log(pile);
    counter+=pile[1];
    i=i+2;
    j--;
   }
   return counter;
    
};
// @lc code=end

