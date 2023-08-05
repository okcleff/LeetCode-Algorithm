/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
  const answer = [];
  const set = new Set();
  
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (set.has(B[j])) {
        count++;
      }
    }
    answer.push(count);
  }
  
  return answer;
};