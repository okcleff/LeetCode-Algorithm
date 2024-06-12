/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
  let answer = 0;
  
  for (let i = 1; i <= mainTank; i++) {
    answer += 10;
    if (i % 5 === 0 && additionalTank > 0) {
      mainTank++;
      additionalTank--;
    }
  }
  
  return answer;
};