var x = [];
var vids = [];

function preload(){
  for (var i = 0; i < 3000; i++) {
    vids[i] = createImg('giphy.gif');
    x[i] = random(3000, 200);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255, 200);
}

function draw() {
  background(15);
  for (var i = 0; i < x.length; i++) {
    x[i] -= 15.5;
    var y = i * 15.5;
    vids[i].position(x[i], y);
  }
}
