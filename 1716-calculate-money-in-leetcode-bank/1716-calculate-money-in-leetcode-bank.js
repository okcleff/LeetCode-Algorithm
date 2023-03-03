/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
	let min = 1;
	let days = 7;
	let inc = 1;
	let answer = 0;

	for (let i = 0; i < n; i++) {
		if (days !== 0) {
			answer += min;
			min++;
			days--;
		} else {
			inc++;
			min = inc;
			days = 7;
			i--;
		}
	}
  
	return answer;
};