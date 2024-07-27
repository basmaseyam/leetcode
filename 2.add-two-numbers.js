/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let output = new ListNode(0);
    let current = output;
    let carry = 0;
    while (l1 || l2 || carry) {
        if (l1 !== null) {
            carry += l1.val;
            l1 = l1.next;
            }
        if (l2 !== null) {
            carry += l2.val;
            l2 = l2.next;
            }
        const sum = carry % 10;
        carry = Math.floor(carry / 10);
        current.next = new ListNode(sum);
        current = current.next;
            }
        return output.next;

        
    
};
// @lc code=end

