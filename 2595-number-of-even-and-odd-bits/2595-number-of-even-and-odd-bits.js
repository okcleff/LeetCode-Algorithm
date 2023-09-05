/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
  const bins = [...n.toString(2)].reverse();
  let even = 0;
  let odd = 0;

  for(let i = 0; i < bins.length; i++) {
    if(bins[i] === '1') {
      i % 2 ? odd++ : even++;
    }
  }
  
  return [even, odd];
};