/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
  return parseInt(
    [...n.toString(2)]
      .map((bin) => (bin === '0' ? (bin = '1') : (bin = '0')))
      .join(''),
    2
  );
};