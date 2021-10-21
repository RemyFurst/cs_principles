let canvas = null;
let ctx = null;

function init() {
    canvas = document.createElement("canvas");
    // added width and height
    canvas.width = 600;
    canvas.height = 400;
    ctx = canvas.getContext('2d');
    console.log("game initialized");
    try {
        document.body.appendChild(canvas);
    } catch (e) {
        alert(e.message);
    }
    gameLoop();
}

// another big leap!
// Below we have a constructor function
// These can be thought of as molds or templates
// They don't do anything by themselves, but you can create instances of them that can
// This constructor function is a square.  It has x,y,width and height properties
// It also has a method which is like a function tied to any instances of the object we create
let Square = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // this.update = function () {
    //     this.x += 5;
    // }
    this.draw = function () {
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
}

let oneSquare = new Square(10, 10, 50, 50);
let twoSquare = new Square(60, 60, 50, 50);

let gameLoop = function () {
    // console.log('the game loop is alive! now comment this out before it eats up memory');
    // oneSquare.update();
    oneSquare.draw();
    twoSquare.draw();
    window.requestAnimationFrame(gameLoop);
}