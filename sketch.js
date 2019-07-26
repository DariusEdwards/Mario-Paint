let r;
let g;
let b;

function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
    r = 0;
    g = 0;
    b = 225;
}

function mouseDragged() {
    let w = random(100);
    fill(r, g, b);
    circle(mouseX, mouseY, w);
}

let value = 0;

function draw() {
    fill(255, 204, 0);
    rect(440, 175, 50, 50);
    fill(0,255,0);
    rect(440, 275, 50, 50);
}

function mouseClicked(){
    if (mouseX > 440 && mouseX < 490 
        && mouseY > 175 && mouseY < 225) {
        yellowClicked();
    } else if (mouseX > 440 && mouseX < 490 
        && mouseY > 275 && mouseY < 325 ) {
        greenClicked();
    }
}
 
function yellowClicked() {
    r = 255;
    g = 204;
    b = 0;
}

function greenClicked() {
    background(0, 0, 0);
}