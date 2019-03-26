function randomNum(num) {
    return Math.floor(Math.random()*(num + 1));
};

function randomRange(start, end) {
    return Math.floor(Math.random()*(end-start+1))+start;
};

function randomColor16() {
    var r = randomNum(255).toString(16);
    var g = randomNum(255).toString(16);
    var b = randomNum(255).toString(16);
    if (r.length<2) r = "0"+r;
    if (g.length<2) g = "0"+r;
    if (b.length<2) b = "0"+r;
    return "#"+r+g+b;
};

var canvasDom = document.getElementById("canvas");
var context = canvasDom.getContext("2d");
var ColorBall  = function(){};
ColorBall.prototype.left = 0;
ColorBall.prototype.top = 0;
ColorBall.prototype.r = 10;
RainbowBrush = function(){};
RainbowBrush.prototype.getBalls = function(num){
    var colorBalls = [];
    for(var i = 0; i < num; i++){
        var ball = new ColorBall();
        colorBalls.push(ball);
    }
    return colorBalls;
}

RainbowBrush.prototype.brush = function(context, balls, x, y){
    balls.forEach(function(balllem){
        balllem.x = randomRange(x-6, x+6);
        balllem.y = randomRange(y-6, y+6);
        balllem.r = 5;
        context.beginPath();
        context.fillStyle = randomColor16();
        context.arc(balllem.x, balllem.y, balllem.r, 0, Math.PI*2);
        context.fill();
    })
}

var rainbowBrush = new RainbowBrush();
var balls = rainbowBrush.getBalls(1);
canvasDom.onmousedown = function(){
    var flag = true;
    canvasDom.onmousemove = function(e){
        var x = e.clientX;
        var y = e.clientY;
        if(flag)
            rainbowBrush.brush(context, balls, x, y);
    }
    canvasDom.onmouseup = function(){
        flag = false;
    }
}