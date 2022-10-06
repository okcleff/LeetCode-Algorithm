/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
	const population = new Map();
	logs.map((year) => {
		for (let i = year[0]; i < year[1]; i++) {
			population.has(i)
				? population.set(i, population.get(i) + 1)
				: population.set(i, 1);
		}
	});

	let answer = Infinity;
	let people = 0;
	for (let [k, v] of population) {
		if (v > people) {
			people = v;
			answer = k;
		} else if (v === people) {
			answer = Math.min(answer, k);
		}
	}
	return answer;
};