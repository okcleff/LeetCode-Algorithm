/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
	const startBit = start.toString(2).split('');
	const goalBit = goal.toString(2).split('');

	if (startBit.length > goalBit.length) {
		while (startBit.length > goalBit.length) {
			goalBit.unshift('0');
		}
	} else if (startBit.length < goalBit.length) {
		while (startBit.length < goalBit.length) {
			startBit.unshift('0');
		}
	}

	return startBit.filter((bit, idx) => bit !== goalBit[idx]).length;
};