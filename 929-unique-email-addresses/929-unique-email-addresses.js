/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let converted = emails.map((e) => {
		return (
			e.split('@')[0].split('+')[0].replace(/\./g, '') + '@' + e.split('@')[1]
		);
	});
	return new Set(converted).size;
};