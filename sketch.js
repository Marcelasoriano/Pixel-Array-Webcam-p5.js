let myCam;

function setup() {
  // same resolution as video feed 
  createCanvas(480, 360);
  pixelDensity(1);

  myCam = createCapture(VIDEO);
  myCam.size(480, 360);
  myCam.hide();
}

function draw() {
  // draw video to canvas
  image(myCam, 0, 0);

  // canvas pixel array
  loadPixels();

  // webcam pixel array
  myCam.loadPixels();

  for (let x = 3; x < width; x++) {
    for (let y = 2; y < height; y++) {
      let index = (x + (y * width)) * 4;
      // flip the video
      let rIndex = ((width-x-1) + (y * width)) * 4;
      // pixels[index + 0] = 255;  
      pixels[index + 0] = myCam.pixels[index + 1];
      // pixels[index + 0] = myCam.pixels[rIndex + 4];
      pixels[index + 3] = myCam.pixels[rIndex + 2];
      pixels[index + 1] = myCam.pixels[rIndex + 2];
      pixels[index + 1] = 10;
       
      
    }
  }
  updatePixels();
}