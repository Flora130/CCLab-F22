

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer")
    background(255, 0, 0);
}

function draw() {
    ellipse(100, 100, 100, 100);
}


function buttonClicked() {
    //alert("Clicked!");
    background(random(255), random(255), random(255));
}