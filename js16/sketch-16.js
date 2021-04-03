
const seedX = Math.random()
const seedY = Math.random()
const radX = 0.7
const radY = 0.6
let ampX
let ampY

const gif = {
    startLoop: 1,
    endLoop: 2,
    fileName: "noiseLoop2x.gif"
}

function setup() {
    createCanvas(1000, 1000)
    colorMode(HSB, 1, 1, 1)
    frameRate(40)
    background(0)
    fill(27)
    noStroke()
    createLoop(4, { gif })
    ampX = width / 1
    ampY = height / 1
}

function draw() {
    // background(255)
    fill(animLoop.progress, 50, 300)
    translate(width / 100, height / 200)
    const x = animLoop.noise({ radius: radX, seed: seedX }) * ampX
    const y = animLoop.noise({ radius: radY, seed: seedY }) * ampY
    rect(x, y, 1000, 450)

    fill(0);
    noStroke();
    rect(250, 150, 100, 700);

    fill(0);
    noStroke();
    rect(250, 150, 500, 100);  
    
    fill(0);
    noStroke();
    rect(250, 420, 450, 100);


}

// function mousePressed() {

//     saveCanvas("sketch-16","gif") 
// }