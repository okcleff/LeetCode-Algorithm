function stringSequence(target: string): string[] {
  const result: string[] = [];
  let current: string = "";
  
  for (const char of target) {
    if (char === 'a') {
      current += 'a';
      result.push(current);
    } else {
      current += 'a';
      result.push(current);
      
      const steps = char.charCodeAt(0) - 'a'.charCodeAt(0);
      
      for (let i = 0; i < steps; i++) {
        const lastChar = current[current.length - 1];
        const nextChar = lastChar === 'z' ? 'a' : String.fromCharCode(lastChar.charCodeAt(0) + 1);
        current = current.slice(0, -1) + nextChar;
        result.push(current);
      }
    }
  }
  
  return result;
};