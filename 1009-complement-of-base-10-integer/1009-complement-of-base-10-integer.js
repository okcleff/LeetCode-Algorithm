/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
  const binary = n.toString(2);
  const complement = [...binary].map((bin) =>
    bin === '0' ? (bin = '1') : (bin = '0')
  );
  return parseInt(complement.join(''), 2);
};