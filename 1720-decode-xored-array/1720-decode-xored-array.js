/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const answer = [first];
  let bit = first;
  for (let i = 0; i < encoded.length; i++) {
    let decoded = bit ^ encoded[i];
    answer.push(decoded);
    bit = decoded;
  }
  return answer;
};