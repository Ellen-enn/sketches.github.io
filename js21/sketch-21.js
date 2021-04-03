var flower;
var flowerTwo;
var flowerThree;
var flowerFour;
var width = 400;
var height = 400;
var color1;
var color2;
var color3;
// var color4;
// var color5;
// var color6;


function setup (){
    // var flower; //create a var in function is called a local variable, it can only be used in that function
    createCanvas(1000, 1000);
    background(0);
    // var flowerX = random(0, width);
    // var flowerY = random(0, height);
    flower = new Flower(150, 50);
    flowerTwo = new Flower(350, 250);
    flowerThree = new Flower(550, 450);
    flowerFour = new Flower(750, 650);
    // color1 = random(255);
    // color2 = random(255);
    // color3 = random(255);
    // color4 = random(255);
    // color5 = random(255);
    // color6 = random(255);
}

function draw(){
    background(0);
    flower.display();
    flowerTwo.display();
    flowerThree.display();
    flowerFour.display();
}

function mouseMoved(){
    flower.grow();
    flowerTwo.grow();
    flowerThree.grow();
    flowerFour.grow();
}

function mouseClicked(){

    flower.clip();
    flowerTwo.clip();
    flowerThree.clip();
    flowerFour.clip();
}

class Flower{ // set initial values for Flower
    constructor(x, y){ //parameter can be anything
        this.stemX = x;
        this.stemY = y;
        this.stemH = 300;
        this.stemW = 50;
        this.stem0Y = y;
    }

    display(){
        noStroke();
        fill(255);
        rect(this.stemX, this.stemY, this.stemW, this.stemH); // draw stem
        
        // rect(this.stemX, this.stemY + this.stemY / 2, 20, 10); // draw leaf
        
        noStroke();
        fill(255);
        rect(this.stemX, this.stemY, 150, 40);

        noStroke();
        fill(255);
        rect(this.stemX, this.stemY + 100, 130, 40);
        
        
        
        
        // draw pedal
        
        // for(var i = 0; i < 4; i++){
        //     fill(color4, color5, color6);
        //     ellipse(this.stemX, this.stemY, 100);
        // }
        // noStroke();
        // fill(200, 170, 190);
        // rect(this.stemX, this.stemY, 40); // draw pistil
    
    }

    grow (){
        this.stemY = this.stemY - 1;
        this.stemH = this.stemH + 1;
    }

    clip(){
        this.stemH = 300;
        this.stemY = this.stem0Y;

    }


}






