/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  const mid = Math.floor(Math.sqrt(area));
  
  for(let i = mid; i > 0 ; i--) {
    if (area % i === 0) {
      return [area/i, i];
    };
  };
};