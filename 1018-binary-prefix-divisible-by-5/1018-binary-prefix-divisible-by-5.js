/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
const prefixesDivBy5 = (nums, acc = 0) => nums.map(bin => !(acc = (acc * 2 + bin) % 5));
