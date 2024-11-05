var blobs = [];

function setup(){
  // colorMode(HSB);
  createCanvas(1200,1200)
  background(0);
  noLoop();
  stroke(255);  
  strokeWeight(1);
  line(100,600,1100,600)
  line(600,100,600,1100)
}

function draw() {
  background(0)
  strokeWeight(50);
  beginShape();

  for (let i = 0; i < 12; i++) {
    stroke(i*200,10,i*100);
    // const element = array[i];
    vertex(Math.ceil(random(0,11))*width/12, Math.ceil(random(0,11))*height/12);
    
  }
  // Add the vertices.
  

  // Stop drawing the shape.
  endShape(CLOSE);
  filter(BLUR, 20);
}

class Blob {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 200;
  }

  // constructor(x, y, color) {
  //   this.x = x;
  //   this.y = y;
  //   this.r = 400;
  //   this.color = color(0,0,255);
  // }

  update(){

  }

  show() {
    noFill();
    stroke(250,200,250);
    strokeWeight(1);
    ellipse(this.x, this.y, this.r/2);
  }
}