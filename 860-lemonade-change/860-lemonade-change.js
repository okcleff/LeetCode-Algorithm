/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let totalFive = 0;
  let totalTen = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      totalFive++;
    } else if (bills[i] === 10) {
      totalTen++;
    }
    if (bills[i] === 10) {
      if (totalFive === 0) {
        return false;
      } else {
        totalFive--;
      }
    } else if (bills[i] === 20) {
      if (totalFive >= 1 && totalTen >= 1) {
        totalFive--;
        totalTen--;
      } else if (totalFive >= 3) {
        totalFive -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};