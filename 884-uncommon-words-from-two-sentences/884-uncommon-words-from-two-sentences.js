/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  const concat = [...s1.split(' '), ...s2.split(' ')];
  const obj = {};
  for (let str of concat) {
    obj[str] ? obj[str]++ : (obj[str] = 1);
  }
  const result = [];
  for (let key in obj) {
    if (obj[key] === 1) result.push(key);
  }
  return result;
};