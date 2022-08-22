/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
	let duration = [releaseTimes[0]];
	for (let i = 1; i < releaseTimes.length; i++) {
		duration.push(releaseTimes[i] - releaseTimes[i - 1]);
	}

	let hash = {};
	[...keysPressed].map((key, idx) => {
		hash[key] = hash[key] ? Math.max(hash[key], duration[idx]) : duration[idx];
	});

	const longest = Math.max(...Object.values(hash));

	return [...keysPressed]
		.filter((char) => {
			return hash[char] === longest;
		})
		.sort((a, b) => b.charCodeAt() - a.charCodeAt())[0];
};