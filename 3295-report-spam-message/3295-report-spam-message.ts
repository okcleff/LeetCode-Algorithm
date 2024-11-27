function reportSpam(message, bannedWords) {
  bannedWords.sort();
  
  let bannedCount = 0;

  for (const word of message) {
    if (binarySearch(bannedWords, word)) bannedCount++;
    if (bannedCount === 2) {
      return true;
    }
  }

  return false;
}

function binarySearch(array, target) {
  let left = 0, right = array.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}