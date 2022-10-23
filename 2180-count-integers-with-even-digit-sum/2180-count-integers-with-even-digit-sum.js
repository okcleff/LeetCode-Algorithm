/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
  let answer = 0;
  for (let i = 2; i <= num; i++) {
    const digits = i.toString().split('');
    const digitSum = digits.reduce((a, c) => Number(a) + Number(c), 0);

    if (!(digitSum % 2)) answer++;
  }
  return answer;
};