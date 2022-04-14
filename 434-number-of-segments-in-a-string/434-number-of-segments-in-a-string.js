/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.trim()
    ? s
        .trim()
        .replace(/\s{1,}/g, ' ')
        .split(' ').length
    : 0;
};