/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
	const squares = rectangles.map((el) => {
		return Math.min(...el);
	});

	const largest = Math.max(...squares);

	return squares.filter((num) => num === largest).length;
};