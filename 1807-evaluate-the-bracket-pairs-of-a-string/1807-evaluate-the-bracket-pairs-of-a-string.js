/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = new Map(knowledge);
    
	return s.replace(/\(([a-z]+)\)/g, (_, p1) => map.get(p1) ?? "?");
};