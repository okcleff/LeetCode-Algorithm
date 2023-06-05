/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const hash = {};
  
  for (let val of this){
    const key = fn(val);
    hash[key] ? hash[key].push(val) : (hash[key] = [val])
  };
  
  return hash;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */