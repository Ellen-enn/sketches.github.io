let img;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  noStroke();
  img = loadImage('img19/letter.png');
}

function draw() {
  background(0);
  
  // ambient light
   ambientLight(10, 10, 10);
  
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2

  // blue directional light from the left
  directionalLight(1000, 1000, 1000, 0, 0, 0);

  // calculate distance from center to mouseX
  let lightX = mouseX - width / 2;
  let lightY = mouseY - height / 2;
  
  // red spotlight
  // axis located at lightX, lightY, 500
  // axis direction of light: 0, 0, -1
  spotLight(255, 255, 255, lightX, lightY, 500, 0, 0, -1);

  // rotate on X axis
  rotateX(-PI/5);
  // rotate on Y axis
  rotateY(PI/5);
  
  // place box on (0, 0, 0), size 100
  texture(img);
  box(250);

}
