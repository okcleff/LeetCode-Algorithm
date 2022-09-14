/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
	const hash = {};

	for (let i = 0; i < cpdomains.length; i++) {
		const num = cpdomains[i].split(' ')[0] * 1;
		const domain = cpdomains[i].split(' ')[1].split('.');
		const leng = domain.length;
		for (let i = 0; i < leng; i++) {
			hash[[...domain].slice(i, leng).join('.')] =
				hash[[...domain].slice(i, leng).join('.')] + num || num;
		}
	}

	const visits = Object.values(hash);
	const domains = Object.keys(hash);

	return visits.map((visit, idx) => {
		return `${visit} ${domains[idx]}`;
	});
};