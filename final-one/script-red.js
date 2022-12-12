let tiles = [];
let cam;
let bgImg;

function preload() {
    tiles.push(loadImage("assets/images/red1.jpeg"));
    tiles.push(loadImage("assets/images/red2.jpeg"));
    tiles.push(loadImage("assets/images/red3.jpeg"));
    bgImg = loadImage("assets/images/red_sample.png")
}


function setup() {
    // let canvas = createCanvas(750, 750);
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasContainer");
    cam = createCapture(VIDEO);
    cam.hide();
    //sound.play();
    // background(0);
}

function draw() {
    cam.loadPixels();
    let gridSize = 7;
    background(0);
    image(bgImg, 0, 0, windowWidth, windowHeight);
    noStroke()
    for (let y = 0; y < cam.height; y += gridSize) {
        for (let x = 0; x < cam.width; x += gridSize) {
            let index = (x + y * cam.width) * 4;

            let r = cam.pixels[index + 0];
            let g = cam.pixels[index + 1];
            let b = cam.pixels[index + 2];
            let avg = (r + g + b) / 3;

            let cIndex = floor(
                constrain(map(avg, 0, 255, 0, tiles.length), 0, tiles.length - 1)
            );

            let newX = map(x, 0, cam.width, width, 0);
            let newY = map(y, 0, cam.height, 0, height);

            image(tiles[cIndex], newX + random(-1, 1), newY + random(-1, 1));

        }
    }
}