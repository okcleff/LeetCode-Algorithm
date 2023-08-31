/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  return Math.max(...strs.map((x) => (isNaN(+x) ? x.length : +x)));
};