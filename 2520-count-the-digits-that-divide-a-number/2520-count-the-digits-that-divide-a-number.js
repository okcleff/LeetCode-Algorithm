/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
	const numStr = num.toString();
	let answer = 0;

	for (let i = 0; i < numStr.length; i++) {
		if (num % parseInt(numStr[i]) == 0) {
			answer++;
		}
	}
	return answer;
};