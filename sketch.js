function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(mouseX%200,mouseY%200,4);
  ellipse(mouseX,mouseY,100,100);
}
