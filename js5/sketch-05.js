var i;
var p;
var o;
let myBool = false;
let myBool2 = false;
let myBool3 = false;


function setup() {

    createCanvas(1000,1000);
    background(0);
    i = 0;
    p = 0;
    o = 0;
}

function draw() {
    
    if (p < 30) { 
        push();
        noFill();
        stroke(255);
        translate(400,350);
        rotate(p);
        ellipse(20, 20, 2000, 200);
        pop();
        p++;
    }

    if(p >= 30){
        myBool = true; 
    }

    if (i <= 200 && myBool == true) {
        push();
        fill(0);
        noStroke();
        rect(380, 290, 13 * i, 120, 120, 60);
        pop();
        i++;
    }

    if(p >= 30){
        myBool2 = true; 
    }

    if (i <= 200 && myBool2 == true) {
        push();
        fill(0);
        noStroke();
        rect(380, 550, 13 * i, 120, 120, 60);
        pop();
        i++;
    }

    if(p >= 30){
        myBool3 = true; 
    }

    if (o <= 500 && myBool3 == true) {
        push();
        fill(0);
        noStroke();
        rect(330, 300 + o + o + o + o + o + o + o + o + o + o + o + o + o + o + o, 140, 120, 60);
        pop();
        o++;
    }




    
    
  
   

}