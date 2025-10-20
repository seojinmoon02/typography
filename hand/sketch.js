function preload() {
  img = loadImage('hand.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  image(img, 0, 0, 800, windowHeight);
  strokeWeight(2);

}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}