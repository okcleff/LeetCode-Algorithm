/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  return new Date(year, month - 1, day).toLocaleString('en-us', { weekday: 'long' });
};