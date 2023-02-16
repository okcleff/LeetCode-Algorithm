/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
	let answer = 0;
	const str = num.toString();
	for (let i = 0; i < str.length - k + 1; i++) {
		const sub = str.slice(i, k + i);
		if (Number(sub) && !(num % sub)) answer++;
	}
	return answer;
};