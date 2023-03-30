/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
	const queue = [];

	people
		.sort((a, b) => b[0] - a[0] || a[1] - b[1])
		.forEach((person) => queue.splice(person[1], 0, person));

	return queue;
};