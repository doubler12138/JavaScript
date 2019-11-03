function Fibonacci(n) {
	if(n === 2 || n === 1) {
		return 1;
	} else {
		return Fibonacci(n-1) + Fibonacci(n-2)
	}
}

function Fibonacci(n) {
	let f = 0,
		g = 1;
	while(n--) {
		g += f;
		f = g - f;
	}
    return f;
}