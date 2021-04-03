var q;
var e;
var r;

function setup() {

    createCanvas(1000,1000);
    background(255, 0, 0);

    // noStroke();
    // fill(0, 0, 0);
    // rect(250,250,100,500);
    
    
    for(var r = 1; r < 100; r++){
        noFill();
        stroke(0, 255, 0);
        ellipse(220, 500, 100, random(900)); 
    }

    for(var q = 1; q < 100; q++){
        noFill();
        stroke(0, 255, 0);
        ellipse(550, 100, random(600), 80); 
    }

    for(var e = 1; e < 100; e++){
        noFill();
        stroke(0, 255, 0);
        ellipse(550, 450, random(550), 80); 
    }
    


}

function mousePressed() {

    saveCanvas("sketch-10","png") //点击canvas 可直接下载成png
}