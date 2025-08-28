/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
  const person1Distance = Math.abs(z - x);
  const person2Distance = Math.abs(z - y);

  if (person1Distance < person2Distance) return 1;
  if (person1Distance > person2Distance) return 2;
  return 0;
};