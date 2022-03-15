/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
  const isSelfDividing = (num) => {
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
      if (num % parseInt(str[i]) !== 0) return;
    }
    return num;
  };

var selfDividingNumbers = function(left, right) {
  const arr = [];
  for (let i = left; i < right + 1; i++) {
    arr.push(i);
  }

  const result = arr.filter((el) => {
    return isSelfDividing(el);
  });

  return result;
};