/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
	const arr = [];

	const backtrack = (S, arr, str, index) => {
		if (index === S.length) {
			arr.push(str);
			return;
		}

		if (S.charAt(index) >= 'A' && S.charAt(index) <= 'Z') {
			backtrack(S, arr, str + S.charAt(index).toLowerCase(), index + 1);
		}

		if (S.charAt(index) >= 'a' && S.charAt(index) <= 'z') {
			backtrack(S, arr, str + S.charAt(index).toUpperCase(), index + 1);
		}

		backtrack(S, arr, str + S.charAt(index), index + 1);
	};

	backtrack(S, arr, '', 0);

	return arr;
};