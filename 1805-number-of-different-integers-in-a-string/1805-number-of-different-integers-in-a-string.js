/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  const removeChar = word.replace(/[a-zA-Z]/g, ' ');
  const digits = removeChar
    .split(' ')
    .filter((el) => el.length)
    .map((el) => {
      return BigInt(el);
    });
  return new Set(digits).size;
};