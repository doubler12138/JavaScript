let pre = [1, 2, 4, 7, 3, 5, 6, 8],
	vin = [4, 7, 2, 1, 5, 3, 8, 6];
function reConstructBinaryTree(pre, vin) {
	if(pre.length === 0 || vin.length === 0) {
		return null
	}
	const index = vin.indexOf(pre[0]),
		vinleft = vin.slice(0, index),
		vinright = vin.slice(index + 1),
		preleft = pre.slice(1, index + 1),
		preright = pre.slice(index + 1);
	return {
		val: pre[0],
		left: reConstructBinaryTree(preleft, vinleft),
		right: reConstructBinaryTree(preright, vinright)
	};
}