/**
 * @param {string} s
 * @return {number}
 */

const delBlank = (x) => {
  for (let i = x.length - 1; i >= 0; i--) {
    if (x[i] !== ' ') {
      x.splice(i + 1);
      return x;
    }
  }
};

const findBlank = (y) => {
  if (y.indexOf(' ') !== -1) {
    for (let i = y.length - 1; i >= 0; i--) {
      if (y[i] === ' ') {
        return y.splice(i + 1);
      }
    }
  } else {
    return y;
  }
};

var lengthOfLastWord = function (s) {
  if (s.length === 1) return 1;

  const arr = s.split('');
  const arr2 = delBlank(arr);
  const arr3 = findBlank(arr2);

  return arr3.length;
};