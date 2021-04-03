var i;
var p;
var q;
let myBool = false; 
let myBool2 = false;



function setup(){
    createCanvas(1000,1000);
    background(0);
    angleMode(DEGREES);
    frameRate(300); 
    i = 0;
    p = 0;
    q = 0;
  
}

function draw(){
    
    

    if (q <= 400) {
        push();
        fill(0);
        stroke(random(255),random(255),random(255));
        rect(160, 100 + q + q, 140, 2, 50, 50, 20);
        pop();
        q++;
    }

    if (q > 1) {
        myBool = true;
    }
    if (p <= 250 && myBool == true){
        push();
        noFill();
        stroke(random(255),random(255),random(255));
        rect(300, 100, 0 + p + p, 120, 0, 0, 0, 0);
        pop();
        p++;
    
    }
    
    if (q > 1) {
        myBool2 = true;
    }
   

    if (i <= 230 && myBool2 == true) {
        push();
        noFill();
        stroke(random(255),random(255),random(255));
        rect(300, 400, 0 + i + i, 120, 0, 0, 0, 0, 0);
        pop();
        i++;
    }

}


