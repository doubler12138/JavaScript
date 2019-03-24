var p = Object.defineProperties({}, {
    x: {value: 1, writable: true, enumerable: true, configurable: true},
    y: {value: 1, writable: true, enumerable: true, configurable: true},
    r: {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable: true,
        configurable: true
    }
});

/*
 *给Object.prototype添加一个不可枚举的extend()方法
 * 这个方法继承自调用它的对象，将作为参数传入的对象属性一一复制
 * 除了值之外，也复制属性的所有特性，除非在目标对象中存在同名的属性
 * 参数独享的所有自有对象（包括不可枚举的属性）也会一一复制
 */
Object.defineProperty(Object.prototype,
    "extend",
    {
        writable: true,
        enumerable: false,
        configurable: true,
        value: function(o){
            let names = Object.getOwnPropertyNames(o);
            for(let i = 0; i < names.length; i++){
                if(names[i] in this) continue;
                let desc = Object.getOwnPropertyDescriptor(o,names[i]);
                Object.defineProperty(this,names[i],desc);
            }
        }
});

var o = Object.create(Object.prototype);
o.extend(p);