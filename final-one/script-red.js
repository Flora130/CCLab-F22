let tiles = [];
let cam;

function preload() {
    tiles.push(loadImage("assets/images/red1.jpeg"));
    tiles.push(loadImage("assets/images/red2.jpeg"));
    tiles.push(loadImage("assets/images/red3.jpeg"));
    // sound = loadSound("assets/beat.mp3");
}


function setup() {
    let canvas = createCanvas(750, 750);
    canvas.parent("canvasContainer");
    cam = createCapture(VIDEO);
    cam.hide();
    //sound.play();
    // background(0);
}

function draw() {
    cam.loadPixels();
    let gridSize = 8;
    background(0);
    noStroke();
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


            image(tiles[cIndex], newX, newY);

        }
    }
}