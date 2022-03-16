/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const matR = mat.length;
  const matC = mat[0].length;

  if (matR * matC !== r * c) return mat;

  let concat = [];
  mat.map((el) => {
    concat = [...concat, ...el];
  });

  let result = [];
  for (let i = 0; i < r; i++) {
    result.push([...concat.splice(0, c)]);
  }

  return result;
};