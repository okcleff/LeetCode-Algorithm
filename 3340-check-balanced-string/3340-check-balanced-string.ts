function isBalanced(num: string): boolean {
  let oddSum = 0;
  let evenSum = 0;
  
  [...num].forEach((n, i) => {
    const digit = Number(n);
    if (i % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  })
  
  return oddSum === evenSum;
};