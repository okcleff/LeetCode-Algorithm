function numberOfSpecialChars(word: string): number {
  const specialLetters = new Set<string>();

  for (const char of word) {
    if (
      word.includes(char.toLowerCase()) &&
      word.includes(char.toUpperCase())
    ) {
      specialLetters.add(char.toLowerCase());
    }
  }

  return specialLetters.size;
};