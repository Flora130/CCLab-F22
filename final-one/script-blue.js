let tiles = [];
let cam;
let bgImg;

function preload() {
  tiles.push(loadImage("assets/images/blue1.jpeg"));
  tiles.push(loadImage("assets/images/blue2.jpeg"));
  tiles.push(loadImage("assets/images/blue3.jpeg"));
  bgImg = loadImage("assets/images/blue.jpeg");
  // sound = loadSound("assets/beat.mp3");
}


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  cam = createCapture(VIDEO);
  cam.hide();

  image(bgImg, 0, 0, width, height);
}

function draw() {
  background(0, 10);

  cam.loadPixels();
  let gridSize = 10;
  // image(bgImg, 0, 0, width, height);

  noFill();
  stroke(0, 80, 255);
  for (let x = 0; x < cam.width; x += gridSize) {
    beginShape();
    for (let y = 0; y < cam.height; y += gridSize) {
      let index = (x + y * cam.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let avg = (r + g + b) / 3;

      let xAdj = map(avg, 0, 150, 0, 25);

      let newX = map(x + xAdj, 0, cam.width, width, 0);
      let newY = map(y, 0, cam.height, 0, height);
      vertex(newX, newY);
    }
    endShape();
  }
}