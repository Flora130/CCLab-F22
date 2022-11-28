
let x;
let angleDeg = 0;

function setup() {
    let cnv = createCanvas(450, 450);
    cnv.parent("canvasContainer");
    background(0, 0, 0);
}



function draw() {
    angleDeg = angleDeg + 30.1;
    let angleRag = radians(angleDeg);
    let freq = frameCount * 0.01;
    let sinForRadDist = sin(freq);
    let radDist = map(sinForRadDist, -1, 1, 50, 200);
    let dia = map(sinForRadDist, -1, 1, 100, 150);
    let cosVal = cos(angleRag) * radDist;
    let sinVal = sin(angleRag) * radDist;
    fill(random(255), 0, 0);
    x = cosVal + width / 2;
    y = sinVal + height / 2;

    circle(x, y, 10);


    fill(200, 200, 0);
    circle(width / 2, height / 2, dia);
}