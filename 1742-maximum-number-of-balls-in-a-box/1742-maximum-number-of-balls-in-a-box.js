/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
	const obj = {};
	for (let i = lowLimit; i <= highLimit; i++) {
		let boxNum = i.toString().split('');
		let sum =
			boxNum.length === 1
				? Number(boxNum[0])
				: boxNum.reduce((acc, curr) => Number(acc) + Number(curr));
		obj[sum] = obj[sum] + 1 || 1;
	}
	return Math.max(...Object.values(obj));
};