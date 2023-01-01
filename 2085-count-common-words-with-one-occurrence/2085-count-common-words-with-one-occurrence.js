/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
  const map1 = new Map();
  const map2 = new Map();
  let answer = 0;

  for (let word of words1) {
    map1.set(word, map1.get(word) + 1 || 1);
  }
  for (let word of words2) {
    map2.set(word, map2.get(word) + 1 || 1);
  }
  for (let word of words1) {
    if (map1.get(word) === 1 && map2.get(word) === 1) answer++;
  }

  return answer;
};