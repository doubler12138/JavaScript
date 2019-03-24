// 将对象o中可枚举属性的属性名追至数组a中，并返回这个数组
function getPropertyNames(o,/*optional*/a){
    if(a == null) a = [];//如果未定义则使用新数组
    for(let property in o) a.push(property);
    return a;
}
var o = {x:1,y:2,z:3};
var a = getPropertyNames(o);

//实参对象检测实参个数
function f(x,y,z){
    if(arguments.length != 3) {
        throw new Error("function f called with " + arguments.length + " arguments,but it expects 3 artuments.");
    }else{
        return x+y+z;
    }
}

function max(/*...*/){
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max) max = arguments[i];
    }
    return max;
}

//匿名函数通过实参对象的callee属性进行递归调用
var factorial = function(x){
    if(x<=1) return 1;
    return x * arguments.callee(x-1);
}

//将对象属性作为实参
function easycopy(args){
    arraycopy(args.from,
        args.from_start || 0,
        args.to,args.to_start || 0,
        args.length);
}

//实参类型检测
//先写一个检查是否是类数组对象的函数
function isArrayLike(o){
    if (o &&
        typeof o === "object" &&
        isFinite(o.length) &&
        o.length > 0 &&
        o.length === Math.floor(o.length) &&
        o.length < 4294967296)
        return true;
    else
        return false;
}

function sum(a){
    if (isArrayLike(a)){
        let total = 0;
        for(let i = 0; i < a.length; i++){
            let element = a[i];
            if (element == null) continue;
            if (isFinite(element)) total += element;
            else throw new Error("sum(): elements must be finite numbers");
        }
        return total;
    }
    else throw new Error("sum(): argument must be array-like");
}

//实参类型和是残割数都不确定的函数
function flexisum(a){
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        let element = arguments[i],n;
        if (element == null) continue;
        if (isArray(element))
            n = flexisum.apply(this.element);
        else if (typeof element === "function")
            n = Number(element());
        else
            n = Number(element);
        if (isNaN(n))
            throw Error("flexisum(): can't convert " + element + " to number");
    }
    return total;
}