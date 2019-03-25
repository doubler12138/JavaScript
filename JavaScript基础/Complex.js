/*
 *这个文件定义了Complex类，用来描述复数
 */

function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)){
        throw new TypeError();
    }
    this.r = real;
    this.i = imaginary;``
}

/*
 *类的实例方法定义为原型对象的函数值属性
 * 这里定义的方法可以被所有实例继承，并未它们提供共享的行为
 * 需要注意的是，JavaScript的实例方法必须使用关键字this来存取实例的字段
 */

Complex.prototype.add = function(that) { return new Complex(this.r + that.r, this.i + that.i); };
Complex.prototype.mul = function(that) { return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r); };
Complex.prototype.mag = function() { return Math.sqrt(this.r * this.r + this.i * this.i); };
Complex.prototype.neg = function() { return new Complex(-this.r, -this.i); };
Complex.prototype.toString = function() { return "{" + this.r + "," + this.i + "}"; };
Complex.prototype.equals = function (that) {
    return that !== null && that.constructor === Complex && this.r === that.r && this.i === that.i;
};

/*
 *类字段（比如常量）和类方法直接定义为构造函数的属性
 * 需要注意的是，类的方法通常不适用关键字this，他们只对其参数进行操作
 */

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

/*
 *定义类的“私有”字段
 * 下划线前缀表明它是类内部使用的，而不属于类的公有API的部分
 */
Complex._format = /^\{([^,]+),([^}]+)\}$/;

//这个类方法将由实例对象的toString方法返回的字符串格式解析为一个Complex对象
//或者抛出一个类型错误异常
Complex.parse = function (s) {
    try{
        var m = Complex._format.exec(s);
        return new Complex(parseFloat(m[1]), parseFloat(m[2]));
    } catch (e) {
        throw new TypeError("Can't parse '" + s + "' as a complex number.")
    }
}
