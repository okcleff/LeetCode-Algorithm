/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
  const leng = hours.length;
  let answer = 0;
  for (let i = 0; i < leng - 1; i++) {
    for (let j = i + 1; j < leng; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) answer++;
    }
  }
  return answer;
};