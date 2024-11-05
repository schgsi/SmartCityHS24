var blobs = [];

function setup(){
  // colorMode(HSB);
  createCanvas(1200,1200)
  background(0);
  noLoop();
}

function draw() {

  for (let i = 0; i < 10; i++) {
    ellipse(Math.ceil(random(1,11))*width/12, Math.ceil(random(1,11))*height/12,100)
    
    
  }

  filter(BLUR, 10);

  stroke(255)
  strokeWeight(0.5);
  line(200,100,200,1100)
  line(300,100,300,1100)
  line(400,100,400,1100)
  line(500,100,500,1100)

  line(700,100,700,1100)
  line(800,100,800,1100)
  line(900,100,900,1100)
  line(1000,100,1000,1100)
  
  line(100,200,1100,200)
  line(100,300,1100,300)
  line(100,400,1100,400)
  line(100,500,1100,500)

  line(100,700,1100,700)
  line(100,800,1100,800)
  line(100,900,1100,900)
  line(100,1000,1100,1000)
  
  strokeWeight(2);
  line(100,600,1100,600)
  line(600,100,600,1100)
}

class Blob {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 400;
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
    stroke(0);
    strokeWeight(1);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}