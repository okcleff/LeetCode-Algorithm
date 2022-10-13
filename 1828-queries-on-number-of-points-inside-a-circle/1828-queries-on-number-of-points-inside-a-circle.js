/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
	return queries.map((circle) => {
		const [x, y, r] = circle;
		return points.filter((p) => {
			return Math.sqrt((p[0] - x) ** 2 + (p[1] - y) ** 2) <= r;
		}).length;
	});
};