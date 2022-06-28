/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
	if (!s.includes('*')) return 0;

	const arr = s.split('|');
	let withAsterisk = '';
	for (let i = 0; i < arr.length; i += 2) {
		withAsterisk += arr[i];
	}
	return withAsterisk.match(/\*/g)?.length || 0;
};