/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
  if (Array.isArray(obj)) {
    return obj.filter(obj => !!obj).map(obj => compactObject(obj));
  }
  
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const answer = {};
  
  for (const key in obj) {
    const value = compactObject(obj[key]);
    
    if (!!value) {
      answer[key] = value;
    }
  }
  
  return answer;   
};