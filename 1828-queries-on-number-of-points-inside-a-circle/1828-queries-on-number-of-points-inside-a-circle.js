/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
	return queries.map((circle) => {
		return points.filter((p) => {
			return (
				Math.sqrt((p[0] - circle[0]) ** 2 + (p[1] - circle[1]) ** 2) <=
				circle[2]
			);
		}).length;
	});
};