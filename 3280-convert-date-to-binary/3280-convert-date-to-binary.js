/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
  const [yyyy, mm, dd] = date.split('-');
  
  const convertToBinary = (str) => Number(str).toString(2);
  
  return `${convertToBinary(yyyy)}-${convertToBinary(mm)}-${convertToBinary(dd)}`
};