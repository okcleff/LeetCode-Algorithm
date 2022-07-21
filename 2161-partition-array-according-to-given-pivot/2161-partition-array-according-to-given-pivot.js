/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
	let middle = [];
	let left = [];
	let right = [];

	nums.map((num) => {
		if (num === pivot) middle.push(num);
		if (num > pivot) right.push(num);
		if (num < pivot) left.push(num);
	});

	return [...left, ...middle, ...right];  
};