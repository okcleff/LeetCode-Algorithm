/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
  const givenBalance = 100;
  
  return givenBalance - (Math.round(purchaseAmount / 10) * 10);
};