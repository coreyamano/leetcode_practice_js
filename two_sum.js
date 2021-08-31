// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// What is the input?
// nums as an array and target as a number
// What is the output?
// an array return
// What are other things to consider?
// only one solution and cannot use the same element twice

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  var solution = {}
  for (var [index, num] of nums.entries()) {
    if (solution[num] !== undefined) return [solution[num], index]
    solution[target - num] = index
  }
};