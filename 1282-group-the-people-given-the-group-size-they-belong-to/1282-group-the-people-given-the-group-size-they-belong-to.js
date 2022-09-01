/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
	const result = [];
	const hash = {};

	groupSizes.map((size, idx) => {
		hash[size] ? hash[size].push(idx) : (hash[size] = [idx]);

		if (hash[size].length === size) {
			result.push(hash[size]);
			delete hash[size];
		}
	});

	return result;
};