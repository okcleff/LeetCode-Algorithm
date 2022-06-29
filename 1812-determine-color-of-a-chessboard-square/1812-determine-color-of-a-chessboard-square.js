/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(sqr) {
  return (sqr.charCodeAt(0) + Number(sqr[1])) % 2 !== 0;
};