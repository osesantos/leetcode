/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const result = [];
  nums.forEach((a, x) => {
    nums.forEach((b, y) => {
      if (result.length === 0 && x != y && a + b === target) {
        result.push(x);
        result.push(y);
      }
    });
  });
  return result;
};

// This solution works, however the best solution is to use an hashtable

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
