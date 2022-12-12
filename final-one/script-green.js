let tiles = [];
let cam;
let bgImg;

function preload() {
    tiles.push(loadImage("assets/images/green1.jpeg"));
    tiles.push(loadImage("assets/images/green2.jpeg"));
    tiles.push(loadImage("assets/images/green3.jpeg"));
    bgImg = loadImage("assets/images/green.jpeg");
    // sound = loadSound("assets/beat.mp3");
}


function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasContainer");
    cam = createCapture(VIDEO);
    cam.hide();
    //sound.play();
    //background(0);
    image(bgImg, 0, 0, width, height);
}

function draw() {
    background(0, 10);
    cam.loadPixels();
    let gridSize = 20;

    noFill();
    stroke(101, 195, 154);
    for (let y = 0; y < cam.height; y += gridSize) {
        beginShape();
        for (let x = 0; x < cam.width; x += gridSize) {
            let index = (x + y * cam.width) * 4;

            let r = cam.pixels[index + 0];
            let g = cam.pixels[index + 1];
            let b = cam.pixels[index + 2];
            let avg = (r + g + b) / 3;

            let yAdj = map(avg, 0, 50, 0, 25);

            let newX = map(x, 0, cam.width, width, 0);
            let newY = map(y + yAdj, 0, cam.height, 0, height);
            vertex(newX, newY);
        }
        endShape();



    }
}
