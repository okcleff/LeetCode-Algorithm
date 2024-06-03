/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
  let concatenatedString = '';
  
  for (const word of words) {
    concatenatedString += word;
    if (concatenatedString === s) return true;
  }
  
  return false;
};