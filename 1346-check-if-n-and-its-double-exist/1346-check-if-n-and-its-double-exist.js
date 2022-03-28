/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr.indexOf(0) !== i) return true;
    }
    if (arr.indexOf(arr[i] * 2) !== -1 && arr.indexOf(0) !== i) return true;
  }
  return false;
};