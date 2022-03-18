/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let rec = [];
  for (let i = 0; i < ops.length; i++) {
    let round = ops[i];
    let last = rec.length - 1;
    if (round === 'D') rec.push(rec[last] * 2);
    if (round === 'C') rec.pop();
    if (round === '+') rec.push(rec[last] + rec[last - 1]);
    if (parseInt(round)) rec.push(parseInt(round));
  }
  return rec.reduce((a, b) => a + b);
};