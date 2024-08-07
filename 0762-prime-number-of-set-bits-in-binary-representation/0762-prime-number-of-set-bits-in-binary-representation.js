/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19];
  
  let answer = 0;
  
  for (let i = left; i <= right; i++) {
    const setBitCount = i.toString(2).split('').filter((bit) => bit === '1').length;
    if (primes.includes(setBitCount)) answer++;
  }
  
  return answer;
};