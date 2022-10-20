/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
	if (s.length === 1) return 1;

	let answer = 0;
	let curr = 1;
	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) {
			curr++;
		} else {
			answer = Math.max(curr, answer);
			curr = 1;
		}
	}
  return Math.max(curr, answer);
};