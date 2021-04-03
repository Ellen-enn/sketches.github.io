function setup() {

    createCanvas(1000,1000);
    background(0);
    

    noStroke();
    fill(255);
    beginShape();
    vertex(280,245);
    vertex(350,270);
    vertex(350,875);
    vertex(280,845);
    endShape();
    
    
    noStroke();
    fill(255);
    beginShape();
    vertex(280,245);
    vertex(350,270);
    vertex(750,150);
    vertex(680,140);
    endShape();

    noStroke();
    fill(255);
    beginShape();
    vertex(280,540);
    vertex(350,575);
    vertex(720,410);
    vertex(650,400);
    endShape();

}


   


function draw() {
    stroke(random(255), random(255), random(255));
    fill(random(255), random(255), random(255));
    var rad = random(1) * 8;
    ellipse(mouseX, mouseY, rad, rad); 
}


function mousePressed() {

    saveCanvas("sketch-02","png");
}

