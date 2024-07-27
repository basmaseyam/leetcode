/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let l=s.length;
    let result="";
    let pal ="";
    let counter=0;
   
    let isEqual=s.split('').every((char) => char === s[0]);
    if(l<2 || isEqual){
        return s;
    }

    for(let i=0;i<l;i++){
       
        if(s[i-1]===s[i] ){
            let start=i-1;
            let end=i;
            pal="";
            while(s[start]===s[end] && start>=0 && end<l){
                pal=s[start]+pal+s[end];
                start--;
                end++;
            }
            if(pal.length>counter){
                counter=pal.length;
                result=pal;
           }
       
        }
       
         if(s[i-1]===s[i+1]){
            let start=i-1;
            let end=i+1;
            pal=s[i];
            while(s[start]===s[end] && start>=0 && end<l){
                pal=s[start]+pal+s[end];
                start--;
                end++;
            }
            if(pal.length>counter){
                counter=pal.length;
                result=pal;
           }
        }
        else{
            pal=s[i];
            if(pal.length>counter){
                counter=pal.length;
                result=pal;
           }
        }
        
       
    }
    return result;
};
   


// @lc code=end

