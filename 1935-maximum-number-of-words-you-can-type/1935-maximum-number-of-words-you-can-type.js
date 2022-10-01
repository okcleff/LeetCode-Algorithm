/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  let arr = text.split(' ');

  for (let letter of brokenLetters) {
    arr = arr.filter((word) => !word.includes(letter));
  }

  return arr.length;
};