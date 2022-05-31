/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  const bitCounter = (num) => {
    return num.toString(2).replace(/0/g, '').length;
  };

  return arr.sort((a, b) => {
    if (bitCounter(a) < bitCounter(b)) {
      return bitCounter(a) - bitCounter(b);
    } else if (bitCounter(a) === bitCounter(b)) {
      return a - b;
    }
  });
};