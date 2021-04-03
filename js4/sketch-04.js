var i;
var p;
var q;
var o;



function setup(){
    createCanvas(1000,1000);
    background(0);
    angleMode(DEGREES);
    frameRate(50); 
    i = 0;
    p = 0;
    q = 0;
    o = 0;
}

function draw(){

    if (q <= 600) {
        push();
        fill(255);
        noStroke();
        rect(0, 13 * q, 220,90);
        pop();
        q++;
    }

    if (i <= 500) {
        push();
        fill(255);
        noStroke();
        rect(13 * i, 0, 120,90);
        pop();
        i++;
    }

    if (p <= 300) {
        push();
        fill(255);
        noStroke();
        rect(420, 250, 9 * p, 200);
        pop();
        p++;
    }

    if (o <= 300) {
        push();
        fill(255);
        noStroke();
        rect(420, 600, 9 * o, 400);
        pop();
        o++;
    
    }



}