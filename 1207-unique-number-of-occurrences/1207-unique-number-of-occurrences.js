/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
	let obj = {};
	arr.map((num) => {
		obj[num] = obj[num] + 1 || 1;
	});
	let occurence = Object.values(obj);
	return occurence.length === new Set(occurence).size;
};