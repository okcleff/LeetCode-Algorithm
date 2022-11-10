/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
	let prev = 0;
	let answer = 0;

	for (let t of timeSeries) {
		const end = t + duration;
		prev > t ? (answer += end - prev) : (answer += duration);
		prev = end;
	}
	return answer;
};