/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  let result = [];
  image.map((img) =>
    result.push(img.reverse().map((bin) => (bin === 1 ? (bin = 0) : (bin = 1))))
  );
  return result;
};