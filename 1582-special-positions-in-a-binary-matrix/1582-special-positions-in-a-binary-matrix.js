/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  let answer = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        if (isValidRow(i) && isValidCol(j)) {
          answer++;
        }
      }
    }
  }

  function isValidRow(index) {
    let count = 0;
    let row = mat[index];
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 1) {
        count++;
      }
    }
    return !(count > 1);
  }

  function isValidCol(index) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
      let row = mat[i];
      if (row[index] === 1) {
        count++;
      }
    }
    return !(count > 1);
  }

  return answer;
};