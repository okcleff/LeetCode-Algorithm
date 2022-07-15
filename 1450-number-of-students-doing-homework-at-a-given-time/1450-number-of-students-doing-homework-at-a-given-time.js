/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
	return startTime.filter(
		(time, idx) => queryTime >= time && queryTime <= endTime[idx]
	).length;
};