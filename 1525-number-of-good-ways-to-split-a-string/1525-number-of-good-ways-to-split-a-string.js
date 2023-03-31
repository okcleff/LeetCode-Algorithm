/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
	const leftSet = new Set();
	const rightSet = new Set();
	const leng = s.length;

	const arr = [];

	for (let i = 0; i < leng; ++i) {
		leftSet.add(s[i]);
		arr[i] = [leftSet.size, 0];
	}

	for (let i = leng - 1; i > 0; i--) {
		rightSet.add(s[i]);
		arr[i - 1][1] = rightSet.size;
	}

	return arr.filter((set) => set[0] === set[1]).length;
};