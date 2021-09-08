/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let index1 = 0;

  for (let index2 = 1; index2 < nums.length; index2++) {
    if (nums[index1] !== nums[index2]) {
      index1++;
      nums[index1] = nums[index2];
    }
  }
  return index1 + 1
};