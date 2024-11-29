function maxGoodNumber(nums: number[], base: number = 2): number {
  const compare = (a: number, b: number) => {
    const binA = a.toString(base);
    const binB = b.toString(base);
    
    const concatAB = binA + binB;
    const concatBA = binB + binA;
    
    return parseInt(concatBA, base) - parseInt(concatAB, base);
  }
  
  const sorted = [...nums].sort(compare);
  
  const result = sorted
    .map(num => num.toString(base))
    .join('');
    
  return parseInt(result, base);
};