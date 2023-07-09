/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  students.sort((a, b) => a - b);
  
  return seats.sort((a, b) => a - b).reduce((a, b, i) => a += Math.abs(seats[i] - students[i]), 0);
};