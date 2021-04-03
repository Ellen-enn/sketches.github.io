let img;
function setup() {
  createCanvas(1000, 1000, WEBGL);
  img = loadImage('img18/sketch-13.png');
}

function draw() {
  background(0, 0, 255);

  let locX = mouseX - height / 1;
  let locY = mouseY - width / 1;

  ambientLight(random(255), random(255), random(255));
  pointLight(0, 0, 255, locX, locY, 10);

  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  noStroke();
  box(400, 500);
  pop();




}
