/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const answer = [first];
  for (let i = 0; i < encoded.length; i++) {
    answer.push(answer[i] ^ encoded[i]);
  }
  return answer;
};