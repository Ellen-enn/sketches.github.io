var angle = PI / 4;
var sourceCodePro; 

function preload () {
    sourceCodePro = loadFont('fonts15/SourceCodePro-SemiBold.ttf')
}

function setup(){
    
    createCanvas(1000,1000);
    background(0);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);

    fill(0, 255, 0);
    textFont(sourceCodePro);
    textSize(50);
    textLeading(200);
    text('F', 522, 476);
}

function draw(){
    var len = 100;
    angle = slider.value();
    stroke(255, 0, 0);
    strokeWeight(2);
    translate(-400, height);
    branch(800);
}

function branch(len){
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 16){
        push();
        rotate(angle);
        branch(len * 0.9)
        pop();
        push();
        rotate(-angle);
        branch(len * 0.37);
        pop();


    }
}

function mousePressed() {

    saveCanvas("sketch-15","png") 
}