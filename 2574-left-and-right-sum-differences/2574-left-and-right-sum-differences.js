/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
	const answer = [];
  
	for (let i = 0; i < nums.length; i++) {
		let leftSum =
			nums.slice(0, i).length === 0
				? 0
				: nums.slice(0, i).reduce((a, b) => a + b);
    
		let rightSum =
			nums.slice(i + 1).length === 0
				? 0
				: nums.slice(i + 1).reduce((a, b) => a + b);
    
		answer.push(Math.abs(leftSum - rightSum));
	}
  
	return answer;    
};