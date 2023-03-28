/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
	for (let i = 0; i < capacity.length; i++) {
		rocks[i] = capacity[i] - rocks[i];
	}

	rocks.sort((a, b) => a - b);

	let answer = 0;
	let i = 0;
	while (additionalRocks > 0 && i < rocks.length) {
		additionalRocks -= rocks[i];
		if (additionalRocks >= 0) {
			answer++;
		}
		i++;
	}

	return answer;
};