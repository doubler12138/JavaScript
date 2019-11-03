let arr = [[1, 2, 3], [4, 5], [6, 7, 8],[9]];
function find(target, array) {
	for(let i = 0, lenI = array.length; i < lenI; i++) {
		for(let j = 0, lenJ = array[i].length; j < lenJ; j++) {
			if(array[i][j] === target) {
				console.log('true');
				break;
			}
		}
	}
}