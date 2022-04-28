/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let alts = [0];
  gain.map((num) => alts.push(alts[alts.length - 1] + num));
  return alts.sort((a, b) => b - a)[0];
};