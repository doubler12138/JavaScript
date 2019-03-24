//输出o的每个属性的名称和值，返回undefined
function printprops(o){
    for(let p in o){
        console.log(p + ": " + o[p] + "\n");
    }
}

//计算两个笛卡尔坐标(x1,y1)和(x2,y2)之间的距离
function distance(x1,y1,x2,y2) {
    let dx = x2 - x1;
    let dy = y2 - y2;
    return Math.sqrt(dx*dx + dy*dy);
}

//计算阶乘的递归函数
function factorial(x){
    if (x <= 1) return 1;
    return x * factorial(x-1);
}

//这个函数表达式定义了一个函数用来传入参数的平方
//注意我们把它赋值给一个变量
var square = function(x){return x*x;};

//函数表达式可以包含名称，这在递归时很有用
var f = function fact(x) {if (x <= 1) return 1;else return x*fact(x-1);};

//函数表达式也可以作为参数传给其它函数
data.sort(function(a,b){return a-b;});

//函数表达式有时定义后立即调用
var tensquared = (function(x){return x*x;})(10);