/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  const str = s.toUpperCase().split('-').join('');
  let arr = [];
  let sLeng = str.length;
  for (let i = sLeng; i > 0; i -= k) {
    arr.unshift(str.substring(i - k, i));
  }
  return arr.join('-');
};