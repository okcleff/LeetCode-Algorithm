/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const obj = {};
  for (let i = 0; i < moves.length; i++) {
    obj[moves[i]] ? (obj[moves[i]] = obj[moves[i]] + 1) : (obj[moves[i]] = 1);
  }
  return obj['U'] === obj['D'] && obj['L'] === obj['R'];
};