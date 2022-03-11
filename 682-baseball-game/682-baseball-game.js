/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let rec = [];
  for (let i = 0; i < ops.length; i++) {
    let el = ops[i];
    let last = rec.length - 1;
    if (el === 'D') rec.push(rec[last] * 2);
    if (el === 'C') rec.pop();
    if (el === '+') rec.push(rec[last] + rec[last - 1]);
    if (parseInt(el)) rec.push(parseInt(el));
  }
  return rec.reduce((a, b) => a + b);
};