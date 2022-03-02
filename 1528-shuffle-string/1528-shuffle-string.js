/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[indices.indexOf(i)]);
  }
  return arr.join('');
};