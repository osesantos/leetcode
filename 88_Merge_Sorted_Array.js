/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const nums1Slice = nums1.slice(0, m);
  const nums2Slice = nums2.slice(0, n);

  for (let index = 0; index < (m+n); index++) {
    if (index >= nums1Slice.length) {
      nums1[index] = nums2Slice[index - m];
    }
  }

  nums1.sort((a, b) => a - b);
  return nums1;
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
console.log(merge([1],1,[],0));
console.log(merge([],0,[1],1));
