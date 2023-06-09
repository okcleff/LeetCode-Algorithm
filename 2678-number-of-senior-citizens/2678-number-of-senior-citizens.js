/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  return details.filter(detail => Number(detail.substring(11, 13)) > 60).length;
};