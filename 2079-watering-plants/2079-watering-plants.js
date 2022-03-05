/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
  let steps = 0;
  let idx = 0;
  let watered = 0;
  let water = capacity;

  while (watered < plants.length) {
    if (plants[idx] <= water) {
      if (plants[idx] !== 0) watered++;
      water = water - plants[idx];
      plants[idx] = 0;
      steps++;
      idx++;
    } else if (plants[idx] > water) {
      water = capacity;
      steps = steps + idx;
      idx = 0;
    }
  }
  return steps;
};