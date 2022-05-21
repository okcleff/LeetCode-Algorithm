/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
  for (let i = 0; i < arr.length; i++) {
    if (sentence.indexOf(arr[i]) === -1) return false;
  }
  return true;
};