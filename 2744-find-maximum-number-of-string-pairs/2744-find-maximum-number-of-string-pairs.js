/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
  const sorted = words.map(word => {
    return [...word].sort().join('');
  });
  
  return words.length - new Set(sorted).size;
};