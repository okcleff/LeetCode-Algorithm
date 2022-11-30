/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
	let depth = 0;
	for (let i = 0; i < logs.length; i++) {
		if (logs[i] !== '../' && logs[i] !== './') depth++;
		if (logs[i] === '../' && !!depth) depth--;
	}
	return depth;
};