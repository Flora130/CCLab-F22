let tiles = [];
let cam;

function preload() {
  tiles.push(loadImage("assets/images/blue1.jpeg"));
  tiles.push(loadImage("assets/images/blue2.jpeg"));
  tiles.push(loadImage("assets/images/blue3.jpeg"));
  // sound = loadSound("assets/beat.mp3");
}


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
  cam = createCapture(VIDEO);
  cam.hide();
  //sound.play();
  background(0);
}

function draw() {
  cam.loadPixels();
  let gridSize = 6;

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

      let newX = map(x, 0, cam.width, 0, width);
      let newY = map(y, 0, cam.height, 0, height);

      //fill(255, 0, 0);
      //text(chars[cIndex], newX, newY);
      image(tiles[cIndex], newX, newY);
      //image(tiles[1], newX, newY);
    }
  }
}