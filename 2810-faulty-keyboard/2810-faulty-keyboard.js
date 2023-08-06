/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
  const characters = [];
  for (let char of s) {
    if (char === 'i') {
      characters.reverse()
    } else {
      characters.push(char)
    }
  }
  return characters.join("");
};