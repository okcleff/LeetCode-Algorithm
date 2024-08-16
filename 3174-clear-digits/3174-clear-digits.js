/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
  const regex = /[a-z][0-9]/;
  
  while (regex.test(s)) {
    s = s.replace(regex, "");
  }
    
  return s;
};