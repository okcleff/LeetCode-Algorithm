/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
  const dict = {
    'L' : 0,
    'R' : 0,
    '_' : 0
  };
  
  for (let dir of moves) {
    dict[dir]++;
  }
  
  return Math.abs(dict['L'] - dict['R']) + dict['_']
};