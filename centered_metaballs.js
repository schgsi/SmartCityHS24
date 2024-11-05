var blobs = [];
        
let cellSize = 100; 


function setup(){
  colorMode(HSB);
  createCanvas(windowWidth,windowHeight)
  background(0);
  noLoop();

}

function draw() {
  let linelength = windowHeight/12*10;
  let steps = linelength;
  for (i = 0; i < 16; i++) blobs.push(new Blob(6 * width / 12, 6 * height / 12));
  
  blobs.push(new Blob(600,600));
  blobs.push(new Blob(600,600));
  blobs.push(new Blob(600,600));

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
      set(x, y, color(sum/50, sum/60, sum/30));
    }
  }


  updatePixels();
  for (i = 0; i < blobs.length; i++) {
  //  blobs[i].show();
  }

  stroke(255)  
  strokeWeight(1);
  line(windowWidth/2-(linelength/2), windowHeight/2, windowWidth/2+(linelength/2),windowHeight/2)
  line((windowWidth/2),windowHeight/12,(windowWidth/2),windowHeight-(windowHeight/12))
}

class Blob {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 600;
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