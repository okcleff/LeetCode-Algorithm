/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
	const tHash = {};
	const sHash = {};

	[...t].map((char) => {
		tHash[char] = tHash[char] + 1 || 1;
	});

	[...s].map((char) => {
		sHash[char] = sHash[char] + 1 || 1;
	});

	let answer = 0;

	for (let key in tHash) {
		!sHash[key]
			? (answer += tHash[key])
			: (answer += Math.abs(tHash[key] - sHash[key]));
	}

	for (let key in sHash) {
		if (!tHash[key]) answer += sHash[key];
	}

	return answer;
};