/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  const subsets = nums.reduce(
    (subset, value) => subset.concat(subset.map((set) => [value, ...set])),
    [[]]
  );

  const xor = (arr) => {
    return arr.reduce((a, c) => c ^ a, 0);
  };

  return subsets.reduce((a, c) => xor(c) + a, 0);
};
