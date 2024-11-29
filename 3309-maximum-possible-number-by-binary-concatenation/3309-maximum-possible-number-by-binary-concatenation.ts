function maxGoodNumber(nums: number[]): number {
  const base = 2;
  
  const sorted = nums.sort((a, b) => {
    const binA = a.toString(base);
    const binB = b.toString(base);
    
    // 두 이진수를 각각 다른 순서로 연결하여 비교
    const concatAB = binA + binB;
    const concatBA = binB + binA;
    
    // 더 큰 이진수가 되는 순서로 정렬
    return parseInt(concatBA, base) - parseInt(concatAB, base);
  });
  
  const result = sorted
    .map(num => num.toString(base))
    .join('');
    
  return parseInt(result, base);
};