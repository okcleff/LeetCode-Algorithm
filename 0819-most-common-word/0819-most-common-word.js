/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const validWords = paragraph
  .toLowerCase()
  .replace(/[^a-zA-Z\s]/g, " ")
  .split(' ')
  .filter((word) => !banned.includes(word) && word !== "");
  
  
  const map = new Map();
  validWords.forEach((word) => {
    map.set(word, map.get(word) ? map.get(word) + 1 : 1);
  })
  
  let count = 0;
  let answer;
  for (let [key, value] of map) {
    if (count < value) {
      count = value;
      answer = key;
    }
  }
  
  return answer;
};