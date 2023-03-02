/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
	if (arr.length <= 2) return false;

	const peak = arr.indexOf(Math.max(...arr));

	if (peak === 0 || peak === arr.length - 1) return false;

	const uphill = arr.slice(0, peak);
	for (let i = 0; i < uphill.length - 1; i++) {
		if (uphill[i] >= uphill[i + 1]) return false;
	}

	const downhill = arr.slice(peak);
	for (let i = 0; i < downhill.length - 1; i++) {
		if (downhill[i] <= downhill[i + 1]) return false;
	}

	return true;
};