/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
	const operation = (origin, arr) => {
		for (let i = 0; i < n; i++) {
			i % 2 ? (arr[i] = origin[n / 2 + (i - 1) / 2]) : (arr[i] = origin[i / 2]);
		}
		answer++;
		return arr;
	};

	let answer = 0;

	const perm = [];
	for (let i = 0; i < n; i++) {
		perm.push(i);
	}

	let newArr = [];
	newArr = operation(perm, newArr);

	if (perm.join('') === newArr.join('')) {
		return answer;
	} else {
		while (perm.join('') !== newArr.join('')) {
			const curr = newArr;
			newArr = operation(curr, []);
		}
	}

	return answer;
};