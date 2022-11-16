/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
	const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const dateSplit = date.split('-').map((el) => {
		return Number(el);
	});
	const [year, month, day] = dateSplit;

	if (month === 1) return day;

	let answer = 0;
	for (let i = 0; i < month - 1; i++) {
		answer += days[i];
	}
	answer += day;

	const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	if (isLeapYear && month >= 3) answer++;

	return answer;
};