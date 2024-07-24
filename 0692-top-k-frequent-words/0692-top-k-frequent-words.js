/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const map = new Map();
  
  words.forEach(word => {
    map.set(word, map.get(word) ? map.get(word) + 1 : 1);
  })
  
  const freqWords = [];
  for (const [key, value] of map) {
    freqWords.push(key);
  }
  
  freqWords.sort((a, b) => {
    if (map.get(a) === map.get(b)) {
      return a > b ? 1 : -1 
    }
    
    return map.get(b) - map.get(a);
  })
  
  return freqWords.slice(0, k)
};