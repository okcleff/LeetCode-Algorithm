/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
	const map = new Map();

	for (let path of paths) {
		const [dir, ...files] = path.split(' ');
    
		for (let file of files) {
			const [name] = file.match(/^.*\.txt/);

			const content = file.replace(name, '');

			map.has(content)
				? map.get(content).push(dir + '/' + name)
				: map.set(content, [dir + '/' + name]);
		}
	}
  
	return [...map.values()].filter((duplicate) => duplicate.length > 1);
};