function maximumTotalSum(maximumHeight: number[]): number {
  const sortedHeight = [...maximumHeight].sort((a, b) => b - a);
  
  let answer = 0;
  let lastHeight = Infinity;
  
  for (let i = 0; i < sortedHeight.length; i++) {
    const currentHeight = Math.min(sortedHeight[i], lastHeight - 1);
    
    if (currentHeight < 1) {
      return -1;
    }
    
    answer += currentHeight;
    lastHeight = currentHeight;
  }
  
  return answer;
};