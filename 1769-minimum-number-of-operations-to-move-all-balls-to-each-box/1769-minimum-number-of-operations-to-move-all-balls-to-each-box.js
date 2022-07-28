/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
	const box = [...boxes];
	let answer = [];

	const moves = (arr) => {
		let count = 0;
		arr.map((ball, index) => {
			if (ball === '1') count += index + 1;
		});
		return count;
	};

	for (let i = 0; i < box.length; i++) {
		const left = box.slice(0, i).reverse();
		const right = box.slice(i + 1);
		let count = moves(left) + moves(right);
		answer.push(count);
	}

	return answer;
};