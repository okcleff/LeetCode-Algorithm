/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  const string = nums.reduce((acc, curr) => acc + (curr + ''), '');
	return [...string].map((char) => Number(char));
};