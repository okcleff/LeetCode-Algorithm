/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let answer = 0;
	
  for (let i = left; i <= right; i++) {
    if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
      answer++;
    }
  }

  return answer;
};