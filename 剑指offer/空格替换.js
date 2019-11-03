let str = 'We are happy';
function replaceSpace(s) {
	let str = s.split('');
	for(let i = 0, len = str.length; i < len; i++) {
		if(str[i] === ' ') {
			str[i] = '%20';
		}
	}
	return str.join('');
}
replaceSpace(str);

function replaceSpace(str) {
  // write code here
  return str.replace(/\s/g, '%20');
}