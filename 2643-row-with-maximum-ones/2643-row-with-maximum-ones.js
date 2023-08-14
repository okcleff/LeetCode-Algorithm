/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  const numberOfOnes = mat.map(row => {
    return row.filter(num => num === 1).length;
  });
  
  const maxOnes = Math.max(...numberOfOnes);
  
  return [numberOfOnes.indexOf(maxOnes), maxOnes];
};