offs=0;
offs2=10;

function setup() {
    createCanvas(800,800);
    frameRate(10);
    // noLoop();
    colorMode(HSB);
    angleMode(DEGREES);
    
    background(255);

}

function sinSquare(x,y,radius) {
    let rad = radius;
    let mid_point = createVector(x,y);

    for (let i = 0; i < 5000; i+=10) {   
      let x = rad*sin(radians(i))+mid_point.x;
      let y = rad*cos(radians(i))+mid_point.y;
      fill(random(i/50,180),100-i/50,i/50);
      noStroke();
      translate(400,400);
      rotate(90+offs);
      translate(-400,-400);
      ellipse(x,y,offs2);
    }
}

function draw() {
    background(255);
    for (let i = 0; i < 600; i+=18) {
        sinSquare(400,400,i);
    }
    offs+=0.001;}