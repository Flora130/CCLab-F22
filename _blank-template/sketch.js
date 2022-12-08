
let img;
let sound;

function preload() {
  img = loadImage("assets/images/colorful.jpg");
  // sound = loadSound("assets/beat.mp3");

}


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(0);
  //sound.play();

}

function draw() {
  //fill(255);
  //circle(width / 2, height / 2, 10);
  //tint(255, 255, 255, 100);
  //filter(THRESHOLD, 0.1)
  image(img, mouseX, mouseY);
}