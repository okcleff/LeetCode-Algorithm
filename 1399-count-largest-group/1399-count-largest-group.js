/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
	let map = {};
	let largest = 0;
  
	for (let i = 1; i <= n; i++) {
		let str = i.toString();
		let sum = [...str].reduce((a, c) => Number(a) + Number(c), 0);
		map[sum] = map[sum] + 1 || 1;
		largest = Math.max(largest, map[sum]);
	}
  
	return Object.values(map).filter((num) => num === largest).length;
};