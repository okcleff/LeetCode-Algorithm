/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  let answer = [];
  image.map((img) =>
    answer.push(img.reverse().map((bin) => (bin === 1 ? 0 : 1)))
  );
  return answer;
};