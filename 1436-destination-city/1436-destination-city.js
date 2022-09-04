/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const route = new Map(paths);
  let destination = paths[0][1];
  while (route.get(destination)) {
    destination = route.get(destination);
  }
  return destination;
};