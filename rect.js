let offs = 0;

function setup() {
    createCanvas(1000,1000,WEBGL); // for 3D space
    // angleMode(DEGREES); 
    
    background(255);
    // frameRate(20)
    noLoop();
    
}



function draw() {
    translate(-500,-500)
    orbitControl();
    background(255);
    rotateX(offs);
    rotateY(offs);
    rotateZ(offs);
    for (let i = 0; i < width; i+=20) {
        for (let j = 0; j < height; j+=20) {
            // noStroke();
            fill(random(0,100),random(0,255),random(0,255));
            box(20,20,random(0,100));
            translate(20,0);
            // rect(i,j,20,20)
            // fill(random(200,500),random(0,255),random(200,500));
            // rect(i+5,j+5,10,10);
            // fill(0);
            // rect(i+7.5,j+7.5,5,5);
        }  
        translate(-1000,20)
    }
    translate(500,500)
    offs+=0.1;
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