// only javascript goes here NO HTML...
alert("hello world");
console.log("this is coming from a separate file...")
let myVar = 5;
// allows programmer to send message to console
console.log("my first console message");
console.log(myVar); 

// bool
let playing = true;
let width = 200;
let height = 450;
let y = 34;
let x = 300;
var player1 = "Tim";
const player2 = "Ralph";
player2 = "tim";

// for loops in js
for (i=0; i<10; i++){
    console.log(i);
}

function draw() {
    // variable that allows the code to look for an element in the html document with and ID of 'canvas'
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(x, y, width, height);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
    }
  }

function main() {
  draw();
}
