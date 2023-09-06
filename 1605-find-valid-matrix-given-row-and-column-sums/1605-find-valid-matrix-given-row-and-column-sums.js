/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
  const r = rowSum.length;
  const c = colSum.length;
  
  const answer = [];
    
  for(let i = 0; i < r; i++) {
    const row = [];
    
    for(let j = 0; j < c; j++) {
      const min = Math.min(rowSum[i], colSum[j]);
      
      colSum[j] = colSum[j] - min;
      rowSum[i] = rowSum[i] - min;
      
      row.push(min);
    }
    
    answer.push(row);
  }
    
    return answer;
};