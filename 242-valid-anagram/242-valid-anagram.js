/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const arr = (x) => {
    return x.split('').sort().join('');
  };
  return arr(s) === arr(t) ? true : false;
};