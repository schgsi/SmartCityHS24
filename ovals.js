let grid = [];          // array for grid
let gridWidth;          // defined in setup, width/cellsize
let gridHeight;         // defined in setup, height/cellsize
let cellSize = 200;     // how far apart vectors are set
let offs = 0;           // to use in draw function

function setup() {
    createCanvas(1000,1000); // for 3D space
    angleMode(RADIANS);
    gridWidth = width / cellSize;
    gridHeight = height / cellSize;
    // frameRate(10);
    // noLoop();
    fillGrid();         // calls function to set vectors (here so the noise is not redefined again later)

}

// fills points of grid with random vectors
function fillGrid() {
    for (let i = 0; i <= gridWidth; i++) {
        grid[i] = [];
        for (let j = 0; j <= gridHeight; j++) {
            let angle = random() * 2 * PI;
            grid[i][j] = createVector(cos(angle),sin(angle));
        }    
    }
}

// perlin function that will calculate values for every pixel
function perlin2D(x, y) {
    let x0 = floor(x);
    let x1 = x0 + 1;
    let y0 = floor(y);
    let y1 = y0 + 1;
    
    let locX = x - x0;
    let locY = y - y0;

    let topL = grid[x0 % gridWidth][y0 % gridHeight].dot(createVector(locX, locY));
    let topR = grid[x1 % gridWidth][y0 % gridHeight].dot(createVector(locX - 1, locY));
    
    let botL = grid[x0 % gridWidth][y1 % gridHeight].dot(createVector(locX, locY - 1));    
    let botR = grid[x1 % gridWidth][y1 % gridHeight].dot(createVector(locX - 1, locY - 1));    

    let top = lerpy(fade(locX), topL, topR);
    let bot = lerpy(fade(locX), botL, botR);

    return lerpy(fade(locY), top, bot);
}

// interpolation function
function lerpy(t, a, b) {
    return a + t * (b - a);
}

// fade function
function fade(t) {
    return ((6 * t - 15) * t + 10) * t * t * t;
}

function setColor(noiseVal, iNoise, jNoise){
  i = iNoise/2;
  j = jNoise/2;
  fill(noiseVal, i, j);

}

function draw() {
    // background(255);
    for (let i = 20; i < width; i+=40) {
        for (let j = 20; j < height; j+=20) {
            fill(random(200,500),i/4,random(200,500));
            noStroke();
            circle(i,j, 10);
            rect(i,j-5,10,10);
            circle(i+10,j,10);
            rotate(cos(i)/offs);   
        }  
    }
    // move same grid over framerate
    offs+=0.001;
    offs=offs%0.5;
}


//-----------function to save gifs and pngs------------

function keyPressed() {
    // when s is pressed, this will download a png of the frame
    if (key === 's') {
        save('perlin');
    }
    // when g is pressed, this will download a gif of the first 4 seconds of the animation
    if (key === 'g') {
      saveGif('perlin', 4);
    }
}

function keyTyped() {
  if (key == 'f') {
    let d=new Date();
    /* ~~~~~~~~~~~~ export SVG */
    save(d+'.svg')
    noLoop();
  }
}