/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
  const splited = [];
  
  for (let w of words) {
    splited.push(...w.split(separator))
  };
  
  return splited.filter((x) => x);
};