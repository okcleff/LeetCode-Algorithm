/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
	const map = new Map();
	for (let i = s.length - 1; i >= 0; i--) {
		if (!map.has(s[i])) {
			map.set(s[i], i);
		}
	}
  
	const result = [];
	let start = 0;
	let end = 0;
  
	for (let i = 0; i < s.length; i++) {
		const temp = map.get(s[i]);
		if (end < temp) {
			end = temp;
		}
		if (i === end) {
			result.push(end - start + 1);
			start = end + 1;
		}
	}
  
	return result;
};