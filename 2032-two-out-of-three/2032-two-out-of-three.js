/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
	const answer = [];
	const every = new Set([...nums1, ...nums2, ...nums3]);
	const hash = {
		1: nums1,
		2: nums2,
		3: nums3,
	};

	[...every].map((num) => {
		let count = 0;
		for (let key in hash) {
			if (hash[key].includes(num)) count++;
		}
		if (count > 1) answer.push(num);
	});

	return answer;
};