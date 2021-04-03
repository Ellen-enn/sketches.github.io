

function setup(){
    createCanvas(1000,1000);
    frameRate(30);
    background(255);
    angleMode(DEGREES);
}

function draw(){

    stroke(255);
    fill(255);
    rect(250, 150, 550, 100);

    stroke(255);
    fill(255);
    rect(250, 150, 100, 700);

    stroke(255);
    fill(255);
    rect(250, 400, 500, 100);
    
    
    for(i = 0; i < 100; i++) {
        var noiseVal = mouseY + random(20, 20);
        line(i * 10, 0, i * 10, noiseVal);
        stroke(0);
        noFill();
        // arc(i * 10, i * 10, 200, 900, noiseVal / 4.77, 290);
       

    }


}   


