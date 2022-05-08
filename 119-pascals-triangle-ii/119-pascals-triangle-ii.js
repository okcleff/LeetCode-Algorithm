/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(rowIndex === 0) return [1];
  
  const seq = [[1]];

  for (let i = 1; i <= rowIndex; i++) {
    const prev = seq[seq.length - 1];
    const left = [...prev, 0];
    const right = [0, ...prev];
    const current = left.map((r, i) => r + right[i]);
    seq.push(current);
  }

  return seq[rowIndex];
};