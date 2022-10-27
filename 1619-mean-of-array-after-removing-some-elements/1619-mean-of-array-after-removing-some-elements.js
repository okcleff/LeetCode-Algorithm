/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
	arr = arr.sort((a, b) => a - b);
	const leng = arr.length;
	const k = 0.05 * leng;
	let sum = 0;

	for (let i = k; i < leng - k; i++) {
		sum += arr[i];
	}

	return sum / (leng - 2 * k);

};