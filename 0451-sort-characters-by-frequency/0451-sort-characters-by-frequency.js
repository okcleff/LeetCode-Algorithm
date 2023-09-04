/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const hash = {};
  
  [...s].map(char => {
    hash[char] = hash[char] ? hash[char] + 1 : 1;
  })
  
  const hashKeys = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
    
  let answer = ""
  
  for(let char of hashKeys) {
    answer += char.repeat(hash[char]);    
  }

    
  return answer;
};