/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
	const visited = new Set();
	const queue = [0];

	while (queue.length) {
		const num = queue.shift();
		if (visited.has(num)) continue;
		visited.add(num);
		for (let next of rooms[num]) queue.push(next);
	}

	return visited.size === rooms.length;
};