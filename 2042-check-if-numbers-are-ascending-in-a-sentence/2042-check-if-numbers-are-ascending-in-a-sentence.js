/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  const arr = s.split(' ');
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = +arr[i];
    if (isNaN(element)) continue;
    if (element > num) num = element;
    else return false;
  }
  return true;
};