/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
	const hash = new Map();
	arr2.forEach((a, i) => {
		hash.set(a, i);
	});

	const leng = arr2.length;

	return arr1.sort((a, b) => {
		a = hash.has(a) ? hash.get(a) : leng + a;
		b = hash.has(b) ? hash.get(b) : leng + b;
		return a - b;
	});
};