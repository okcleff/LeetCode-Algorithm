/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
  const sorted = num.toString().split('').sort((a, b) => Number(a) - Number(b));

  let str1 = "";
  let str2 = "";
  
  for (let i = 0; i < sorted.length; i++) {
    if (i % 2 === 0) {
      str1 += sorted[i]
    } else {
      str2 += sorted[i]
    }
  }

  return Number(str1) + Number(str2);
};