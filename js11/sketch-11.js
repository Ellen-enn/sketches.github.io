function setup() {

    createCanvas(1000,1000);
    background(255, 0, 0);

    noStroke();
    fill(0, 255, 0);
    rect(120,400, 150, 800);

    noStroke();
    fill(0, 150, 0);
    beginShape();
    vertex(120,400);
    vertex(210,250);
    vertex(920,250);
    vertex(830,400);
    endShape();

    noStroke();
    fill(0, 255, 0);
    rect(120,400, 710, 150);

    noStroke();
    fill(0, 100, 0);
    beginShape();
    vertex(830,400);
    vertex(830,550);
    vertex(920,380);
    vertex(920,250);
    endShape();

    noStroke();
    fill(0, 255, 0);
    rect(120, 700, 680, 130);

    noStroke();
    fill(0, 150, 0);
    beginShape();
    vertex(270,600);
    vertex(270,700);
    vertex(800,700);
    vertex(850,600);
    endShape();

    

    noStroke();
    fill(0, 100, 0);
    beginShape();
    vertex(800,700);
    vertex(800,830);
    vertex(850,700);
    vertex(850,600);
    endShape();

    noStroke();
    fill(0, 100, 0);
    beginShape();
    vertex(320,600);
    vertex(270,700);
    vertex(270,550);
    vertex(320,550);
    endShape();

    noStroke();
    fill(0, 100, 0);
    beginShape();
    vertex(320,1000);
    vertex(270,1000);
    vertex(270,830);
    vertex(320,830);
    endShape();


}




function mousePressed() {

    saveCanvas("sketch-11","png");
}