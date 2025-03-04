/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
  const frequencyMap = {};

  for (const char of s) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  const oddFrequencies = [];
  const evenFrequencies = [];
  
  for (const char in frequencyMap) {
    const frequency = frequencyMap[char];
    if (frequency % 2 === 0) {
      evenFrequencies.push(frequency);
    } else {
      oddFrequencies.push(frequency);
    }
  }
  
  const maxOdd = Math.max(...oddFrequencies);
  const minEven = Math.min(...evenFrequencies);
  
  return maxOdd - minEven;
};