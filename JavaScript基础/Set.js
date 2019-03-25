/*
 *利用JavaScript类实现集合的数据结构
 */

function Set() {
    this.values = {};
    this.n = 0;
    this.add.apply(this,arguments); //通过apply的方式调用原型对象的实例方法add,操作对象为自身对象，操作实参为所有参数
}
//这是一个内部函数，用以将任意JavaScript值和唯一的字符串对应起来
Set._v2s = function(val) {
    switch (val) {
        case undefined: return 'u';
        case null: return 'n';
        case true: return 't';
        case false: return 'f';
        default: switch (typeof val) {
            case 'number': return '#' + val;
            case 'string': return '"' + val;
            default: return '@' + objectId(val);
        }
    }
    function objectId(o) {
        var prop = "|**objectId**|";
        if (!o.hasOwnProperty(prop))
            o[prop] = Set._v2s.next++;
    }
};
Set._v2s.next = 100;
Set.prototype.add = function() {
    for(var i = 0; i < arguments.length; i++) {
        var val = arguments[i];
        var str = Set._v2s(val);
        if (this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n++;
        }
    }
    return this; //支持链式方法调用
};
Set.prototype.remove = function() {
    for(var i = 0; i < arguments.length; i++) {
        var str = Set._v2s(arguments[i]);
        if(this.values.hasOwnProperty(str)) {
            delete this.values[str];
            this.n--;
        }
    }
    return this; //支持链式方法调用
};

Set.prototype.contains = function(value) {
    return this.values.hasOwnProperty(Set._v2s(value));
}

Set.prototype.size = function() {
    return this.n;
}
//遍历集合中的数据，作为其它上下文调用函数时的参数
Set.prototype.foreach = function(f,context) {
    for(var s in this.values) {
        if (this.values.hasOwnProperty(s)) {
            f.call(context, this.values[s]);
        }
    }
}

