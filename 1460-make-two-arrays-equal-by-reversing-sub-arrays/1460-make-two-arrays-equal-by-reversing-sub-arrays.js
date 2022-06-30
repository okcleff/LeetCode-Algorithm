/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
	target.map((num) => {
		if (arr.indexOf(num) !== -1) arr.splice(arr.indexOf(num), 1);
	});
	return arr.length === 0;
};