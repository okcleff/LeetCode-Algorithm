/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  if (n.toString().length < 4) return n.toString();
  const arr = [...n.toString()].reverse();
  for (let i = 3; i < arr.length; i += 4) {
    arr.splice(i, 0, '.');
  }
  return arr.reverse().join('');
};