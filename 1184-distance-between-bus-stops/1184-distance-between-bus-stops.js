/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
	const leng = distance.length;
	const sum = distance.reduce((acc, curr) => acc + curr, 0);

	const clockwise =
		start > destination
			? distance.slice(destination, start).reduce((acc, curr) => acc + curr, 0)
			: distance.slice(start, destination).reduce((acc, curr) => acc + curr, 0);

	return Math.min(clockwise, sum - clockwise);
};