/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let counter = 0;
  let previous = null;
  let i = 0;
  while(i < nums.length){
    let current = nums[i];
    if (current === previous) {
      nums[i] = null;
      counter++;
    }

    previous = current;
    i++;
  }

  nums.sort((a, b) => a === null ? 1 : b === null ? -1 : a - b );

  return nums.length - counter;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
