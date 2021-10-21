let canvas = null;
let ctx = null;
let WIDTH = 600;
let HEIGHT = 400;

function init() {
    let gameDiv = document.createElement("div");
    gameDiv.setAttribute("style", "border: 1px solid;"
    + "width:" + WIDTH + "px; "
    + "height:" + HEIGHT + "px; "
    + "background-color: chartreuse");
    document.body.appendChild(gameDiv);
    canvas = document.createElement("canvas");
    // added width and height
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    ctx = canvas.getContext('2d');
    console.log("game initialized");
    try {
        gameDiv.appendChild(canvas);
    } catch (e) {
        alert(e.message);
    }
    gameLoop();
}

let Square = function (x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.update = function () {
        this.x += 5;
    }
    this.draw = function () {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
}

let redSquare = new Square(10, 10, 50, 50, 'rgb(200, 0, 0)');

let gameLoop = function () {
    // console.log('the game loop is alive! now comment this out before it eats up memory');
    redSquare.update();
    // console.log(oneSquare.x);
    redSquare.draw();
    window.requestAnimationFrame(gameLoop);
}