var blobs = [];

function setup(){
  colorMode(HSB);
  createCanvas(1200,1200)
  background(0);
  noLoop();
}

function draw() {
  for (i = 0; i < 16; i++) blobs.push(new Blob(Math.ceil(random(width/12,width-(width/12))), Math.ceil(random(width/12,width-(width/12)))));
  
  blobs.push(new Blob(600,600));
  blobs.push(new Blob(600,600));
  blobs.push(new Blob(600,600));
  
  // pixelDensity(5);
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += 20 * blobs[i].r / d *10;
      }
      set(x, y, color(180+sum/50, sum/50, 100));
    }
  }

  for (let x = 0; x < pixels.length; x++) {
    pixels[x]+=random(-25,25);
  }


  updatePixels();
  for (i = 0; i < blobs.length; i++) {
  // blobs[i].show();
  }

  stroke(255)
  // strokeWeight(0.5);
  // line(200,100,200,1100)
  // line(300,100,300,1100)
  // line(400,100,400,1100)
  // line(500,100,500,1100)

  // line(700,100,700,1100)
  // line(800,100,800,1100)
  // line(900,100,900,1100)
  // line(1000,100,1000,1100)
  
  // line(100,200,1100,200)
  // line(100,300,1100,300)
  // line(100,400,1100,400)
  // line(100,500,1100,500)

  // line(100,700,1100,700)
  // line(100,800,1100,800)
  // line(100,900,1100,900)
  // line(100,1000,1100,1000)
  
  strokeWeight(1);
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
    stroke(290,30,100);
    strokeWeight(5);
    ellipse(this.x, this.y,5);
  }
}