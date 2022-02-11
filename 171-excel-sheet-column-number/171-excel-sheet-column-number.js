/**
 * @param {string} columnTitle
 * @return {number}
 */

const alphabet = () => {
  let result = {};
  for (let i = 1; i < 27; i++) {
    result[String.fromCharCode(i + 64)] = i;
  }
  return result;
};

const obj = alphabet();

var titleToNumber = function (columnTitle) {
  const arr = columnTitle.split('');
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = num + obj[arr[i]] * Math.pow(26, arr.length - i - 1);
  }
  return num;
};