/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
	let firstCounter = 0;
	let secondCounter = 0;
	let leng1 = firstList.length;
	let leng2 = secondList.length;

	let answer = [];

	while (firstCounter < leng1 && secondCounter < leng2) {
		let [start1, end1] = firstList[firstCounter];
		let [start2, end2] = secondList[secondCounter];

		if (start1 <= end2 && start2 <= end1) {
			answer.push([Math.max(start1, start2), Math.min(end1, end2)]);
		}

		end1 > end2 ? secondCounter++ : firstCounter++;
	}

	return answer;
};