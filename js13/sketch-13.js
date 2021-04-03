var i = 0;
var q = 0;
var w = 0;


function setup(){
    createCanvas(1000, 1000);
    background(0, 0, 255);
    angleMode(DEGREES);
}

function draw(){
    
while (q < 650) {
    fill(255, 255, 0);
    stroke(0);
    push();
    translate(q, 0);
    // rotate(90);
    pent(150, 220, 170, 10);
    q = q + 20;
    pop();
}  

while (w < 650) {
    fill(255, 255, 0);
    stroke(0);
    push();
    translate(w, 0);
    // rotate(90);
    pent(150, 620, 170, 10);
    w = w + 20;
    pop();
} 

while (i < 750) {
    fill(255, 255, 0);
    stroke(0);
    push();
    translate(0, i);
    pent(150, 550, 500, 10);
    i = i + 20;
    pop();
}
}

function mousePressed() {

    saveCanvas("sketch-13","png") 
}