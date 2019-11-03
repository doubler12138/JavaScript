var nameSpace = (function() {
	function getFullName() {
		return 'LiMing';
	}
	function sayHello() {
		return 'Hi ' + getFullName();
	}
	function firstMeet() {
		console.log(sayHello() + ', I am XiaoHong');
	}
	return {
		getFullName: getFullName,
		firstMeet: firstMeet
	}
})();