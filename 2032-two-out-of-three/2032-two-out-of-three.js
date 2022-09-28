/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
	const every = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];
                                                                  
	const map = new Map();
	every.map((num) => {
		map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	});

	const answer = [];
	for (let [k, v] of map) {
		if (v > 1) answer.push(k);
	}

	return answer;
};