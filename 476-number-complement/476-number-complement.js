/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  const arr = num.toString(2).split('');
  const result = [];
  arr.map((bin) => {
    bin === '1' ? result.push('0') : result.push('1');
  });
  return parseInt(result.join(''), 2);
};