/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
  const dict = {};
  [...words.join('')].map((char) => {
    dict[char] = dict[char] + 1 || 1;
  });

  for (let key in dict) {
    if (dict[key] % words.length !== 0) return false;
  }

  return true;
};