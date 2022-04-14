/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  // if (!s.match(/[a-zA-Z]/g)) return 0;
  // return s
  //   .trim()
  //   .replace(/\s{1,}/g, ' ')
  //   .split(' ').length;
    return s.trim()
    ? s
        .trim()
        .replace(/\s{1,}/g, ' ')
        .split(' ').length
    : 0;
};