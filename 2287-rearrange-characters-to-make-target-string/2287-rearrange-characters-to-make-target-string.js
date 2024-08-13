/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  const map = new Map();
  const leng = s.length;
  
  for (let i = 0; i < leng; i++) {
    if (target.includes(s[i])) {
      map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1); 
    }
  }
  
  let answer = 0;
    
  while (true) {
    for (let i = 0; i < target.length; i++) {
      if (!map.get(target[i])) return answer;
      
      map.set(target[i], map.get(target[i]) - 1); 
    }
    answer++;
  }
};