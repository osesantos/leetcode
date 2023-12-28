/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === val) {
      nums[index] = -1;
      count++;
    }
  }
  nums.sort((a, b) => b - a);
  console.log(nums);
  return nums.length - count;
};

console.log(removeElement([3,2,2,3],3));
console.log(removeElement([0,1,2,2,3,0,4,2],2));
