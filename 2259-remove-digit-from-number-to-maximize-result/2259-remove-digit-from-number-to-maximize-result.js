/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
  let answer = '0';
    
    
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let newNum = number.slice(0, i) + number.slice(i + 1);
      if (newNum > answer) {
        answer = newNum;
      }
    }
  }
    
  return answer;
};