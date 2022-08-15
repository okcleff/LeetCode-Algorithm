/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  while (students.length > 0 && students.indexOf(sandwiches[0]) !== -1) {
    students[0] === sandwiches[0]
      ? (students.shift(), sandwiches.shift())
      : students.push(students.shift());
  }
  return students.length;
};