/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  if (s === goal) return true;

  const arr = s.split('');
  let count = 0;

  while (count < s.length) {
    arr.push(arr.shift());
    if (arr.join('') === goal) return true;
    count++;
  }
  return false;
};