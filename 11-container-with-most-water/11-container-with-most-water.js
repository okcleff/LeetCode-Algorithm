/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    area = 0;
  while (left < right) {
    let width = right - left;
    if (height[left] > height[right]) {
      area = Math.max(area, width * height[right]);
      right--;
    } else {
      area = Math.max(area, width * height[left]);
      left++;
    }
  }
  return area;
};