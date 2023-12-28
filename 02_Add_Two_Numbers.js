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
  const a = [...l1].reverse().reduce((a, b) => a.toString(10) + b.toString(10));
  const b = [...l2].reverse().reduce((a, b) => a.toString(10) + b.toString(10));

  return (Number(a)+Number(b)).toString(10).split('').reverse();
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));


