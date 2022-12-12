let tiles = [];
let cam;
let bgImg;


function preload() {
    tiles.push(loadImage("assets/images/purple1.jpeg"));
    tiles.push(loadImage("assets/images/purple2.jpeg"));
    tiles.push(loadImage("assets/images/purple3.jpeg"));
    bgImg = loadImage("assets/images/purple.jpeg");
}


function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasContainer");
    cam = createCapture(VIDEO);
    cam.hide();
    //sound.play();

    image(bgImg, 0, 0, windowWidth, windowHeight);
}

function draw() {
    cam.loadPixels();
    let gridSize = 15;

    noStroke();
    for (let y = 0; y < cam.height; y += gridSize) {
        for (let x = 0; x < cam.width; x += gridSize) {
            let index = (x + y * cam.width) * 4;

            let r = cam.pixels[index + 0];
            let g = cam.pixels[index + 1];
            let b = cam.pixels[index + 2];

            let newX = map(x, 0, cam.width, width, 0);
            let newY = map(y, 0, cam.height, 0, height);

            let amount = 15;
            push();
            translate(newX, newY);
            fill(r, g * 0.1, b * 2.0);
            beginShape();
            vertex(random(-amount, amount), random(-amount, amount));
            vertex(random(-amount, amount), random(-amount, amount));
            vertex(random(-amount, amount), random(-amount, amount));
            endShape();
            pop();
        }
    }
}