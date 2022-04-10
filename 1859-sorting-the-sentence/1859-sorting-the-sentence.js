/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  const arr = s.split(' ');
  let dict = {};
  arr.map((str) => (dict[str[str.length - 1]] = str.slice(0, str.length - 1)));

  let result = [];
  for (let i = 1; i <= arr.length; i++) {
    result[i - 1] = dict[parseInt(i)];
  }
  return result.join(' ');
};