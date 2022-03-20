/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  const deleteHyphen = s.toUpperCase().split('-').join('');
  let arr = [];
  let sLeng = deleteHyphen.length;
  for (let i = sLeng; i > 0; i -= k) {
    arr.unshift(deleteHyphen.substring(i - k, i));
  }
  return arr.join('-');
};