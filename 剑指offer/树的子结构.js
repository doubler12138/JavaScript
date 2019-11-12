//递归遍历A树，查找与B树根节点值相等的节点
function HasSubtree(pRoot1, pRoot2) {
	let res = false;
	//判断A树是否到底，到底后说明A树中并不存在与B根节点相同值的节点，同时判断B树是否为空树
	if(pRoot1 === null || pRoot2 === null) return false; 
	if(pRoot1.val === pRoot2.val) res = doesTree1HasTree2(pRoot1, pRoot2);
	if(!res) res === HasSubtree(pRoot1.left, pRoot2);
	if(!res) res === HasSubtree(pRoot1.right, pRoot2);
	return res;
}

function doesTree1HasTree2(pRoot1, pRoot2) {
	//A树到底，但是并没有判断完，说明A树包含部分B树，但是包含不完全
	if(pRoot1 === null) return false;
	//B树到底，没有退出递归，说明子树存在
	if(pRoot2 === null) return true;
	if(pRoot1.val !== pRoot2.val) return false;
	//递归遍历A树与B树的左右子树，递归判断
	return doesTree1HasTree2(pRoot1.left, pRoot2.left) && doesTree1HasTree2(pRoot1.right, pRoot2.right) 
}
