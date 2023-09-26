/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  const leng = arr.length;
  let answer = 0;
  for(let i = 0; i < leng - 2; i++) {
    for(let j = i + 1; j < leng - 1; j++) {
      if(Math.abs(arr[i] - arr[j]) <= a) {
        for(let k = j + 1; k < leng; k++) {
          if((Math.abs(arr[j] - arr[k]) <= b) && (Math.abs(arr[i] - arr[k]) <= c)) {
            answer++;
          }
        }
      }
    }
  }
  return answer;
};