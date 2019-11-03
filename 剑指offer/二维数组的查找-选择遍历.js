function find(target, array) {
	let n = array.length;
	let row = n - 1;
	while(row >= 0) {
		if(array[row][0] > target) {
			row--;
		} else if(array[row][0] < target) {
			for(let i = 0, len = array[row].length; i < len; i++) {
				if(array[row][i] == target) {
					return "true";
					break;
				}
			}
			return "false";
		}
	}
}