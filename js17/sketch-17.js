function setup() {
    createCanvas(1000, 1000, WEBGL);
    
  }
  
  function draw() {
    background(0);
  
    translate(-150, -50, 0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.01);
    plane(100, 600);
    pop();

    translate(250, 0, 0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.01);
    plane(300, 80);
    pop();

    translate(0, -260, 0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.01);
    plane(300, 80);
    pop();

  }