/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((a, b) => a-b);
  let count = 1;
  let elem = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i-1]) {
      count++;
      if (count > (nums.length / 2)) {
        break;
      }
    } else {
      count = 1;
      elem = nums[i];
    }
  }
  return elem;
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([6,5,5]));
