function numberOf1(n) {
	let count = 0,
		flag = 1;
	while(flag) {
		if (flag & n) count++;
		flag = flag << 1;
	}
	return count;
}

function numberOf1(n) {
	let count = 0;
	while(n) {
		n = n & n-1;
		count++;
	}
	return count;
}

function numberOf1(n) {
	let arr = n.toString(2).split(""),
		count = 0;
	for(i in arr) {
		if(arr[i] == '1') count++;
	}
	return count;
}