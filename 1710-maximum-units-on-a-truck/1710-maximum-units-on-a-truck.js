/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
	boxTypes.sort((a, b) => b[1] - a[1]);

	let units = 0;
	boxTypes.map((box) => {
		if (truckSize === 0) return;
		if (truckSize > box[0]) {
			truckSize -= box[0];
			units += box[0] * box[1];
		} else {
			units += truckSize * box[1];
			truckSize = 0;
		}
	});
	return units;
};