/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
  const isPrefixAndSuffix = (str1, str2) => {
    if (str2.startsWith(str1) && str2.endsWith(str1)) {
      return true;
    }
  }
  
  let answer = 0;
  
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) answer++;
    }
  }
  
  return answer;
};