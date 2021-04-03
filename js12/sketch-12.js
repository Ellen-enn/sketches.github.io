var i = 0;
var q = 0;
var x = 0;
var w = 0;
var e = 0;
var r = 0;

function setup(){
    createCanvas(1000, 1000);
    background(0, 205, 0);
}

function draw(){
    
    if (q < 100) { 
    push();
    fill(255, 90, 67);
    translate(x, i);
    heart(600, 0, 120, 5);
    i = i + 20;
    
    pop();
}

    if (w < 100) { 
    push();
    fill(255, 90, 67);
    translate(i, e);
    heart(500, 650, 120, 5);
    e = e - 20;
    pop();
}

    if (x < 100) { 
    
    push();
    fill(255, 90, 67);
    translate(x, x);
    heart(800, 1200, 120, 5);
    x = x - 20;
    pop();

}
}