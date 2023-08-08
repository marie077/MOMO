
// Simple Guitar

// Use keypress 'a', 's', 'd', 'f', 'j', 'k' to play the guitar!

// global variables

  let xText = 10;
  let yText = 10;
  let xSpeed = 1;
  let ySpeed = 1;
//color variables

// low E string
  let E_r = 255;
  let E_g = 255;
  let E_b = 255;

// A string

  let A_r = 255;
  let A_g = 255;
  let A_b = 255;

// D string

  let D_r = 255;
  let D_g = 255;
  let D_b = 255;

// G string

  let G_r = 255;
  let G_g = 255;
  let G_b = 255;

// B string

  let B_r = 255;
  let B_g = 255;
  let B_b = 255;

// E String (high)

  let Eh_r = 255;
  let Eh_g = 255;
  let Eh_b = 255;

// pre-load audio files
let guitarELow, guitarA, guitarD, guitarG, guitarB, guitarEHigh;
function preload() {
  soundFormats('mp3');
  guitarELow = loadSound('GuitarAudio/guitarELow');
  guitarA = loadSound('GuitarAudio/guitarA');
  guitarD = loadSound('GuitarAudio/guitarD');
  guitarG = loadSound('GuitarAudio/guitarG');
  guitarB = loadSound('GuitarAudio/guitarB');
  guitarEHigh = loadSound('GuitarAudio/guitarEHigh');
}

function setup() {
  createCanvas(466, 600);
  
}

function draw() {
  background(60, 60, 90);
  let randomSpeedX;
  let randomSpeedY;
  // X and Y bounds
  if ((xText > 466) || (yText > 500)) {
    randomSpeedX = random(-2, 1);
    randomSpeedY = random(-2, 1);
    xSpeed = randomSpeedX;
    ySpeed = randomSpeedY;
  } else if ((xText < 0) || (yText < 0)) {
    randomSpeedX = random(0, 2);
    randomSpeedY = random(0, 2);
    xSpeed = randomSpeedX;
    ySpeed = randomSpeedY;
  }
  
  xText += xSpeed;
  yText += ySpeed;
  
  fill(192);
  text('Guitar Angel', xText, yText);

  fill(255);
  // 6 rectangular strings
  rect(66, 0, 5, 600);
  rect(132, 0, 5, 600);
  rect(198, 0, 5, 600);
  rect(264, 0, 5, 600);
  rect(330, 0, 5, 600);
  rect(396, 0, 5, 600);
  
  // buttons to press for each string as a circle
  textFont('Helvetica');
  
  let currentX = mouseX;
  let currentY = mouseY;
  
  // if the mouseX and mouseY is less than or greater than... then..and mousepressed true
  
  // then change color of applied circle and play audio
  fill(E_r, E_g, E_b);
  stroke(0);
  circle(68, 550, 60);
  text('E', 64, 554);
  
  fill(A_r, A_g, A_b);
  stroke(0);
  circle(134, 550, 60);
  text('A', 130, 554);
  
  fill(D_r, D_g, D_b);
  stroke(0);
  circle(200, 550, 60);
  text('D', 196, 554);
  
  fill(G_r, G_g, G_b);
  stroke(0);
  circle(266, 550, 60);
  text('G', 262, 554);
  
  fill(B_r, B_g, B_b);
  stroke(0);
  circle(332, 550, 60);
  text('B', 328, 554);
  
  fill(Eh_r, Eh_g, Eh_b);
  stroke(0);
  circle(398, 550, 60);
  text('E', 394, 554);
}

function keyTyped() {
  if (key === 'a') {
    print('a');
    guitarELow.play();
    E_r = 152;
    E_g = 251;
    E_b = 152;
  } else if (key == 's') {
    print('s');
    guitarA.play();
    A_r = 152;
    A_g = 251;
    A_b = 152;
  } else if (key == 'd') {
    print('d');
    guitarD.play();
    D_r = 152;
    D_g = 251;
    D_b = 152;
  } else if (key == 'f') {
    print('f');
    guitarG.play();
    G_r = 152;
    G_g = 251;
    G_b = 152;
  } else if (key == 'j') {
    print('j');
    guitarB.play();
    B_r = 152;
    B_g = 251;
    B_b = 152;
  } else if (key == 'k') {
    print('k');
    guitarEHigh.play();
    Eh_r = 152;
    Eh_g = 251;
    Eh_b = 152;
  } else {
    print("not an active key for Guitar Angel. Must press: a, s, d, f, j, or k to play the guitar!")
  }
}

function keyReleased() {
  //once keys are released, reset the colors to original
  if (key == 'a' || key == 's' || key == 'd' || key == 'f' || key == 'j' || key == 'k') {  
// E string (low)
    E_r = 255;
    E_g = 255;
    E_b = 255;
    
// A string
    A_r = 255;
    A_g = 255;
    A_b = 255;

// D string

    D_r = 255;
    D_g = 255;
    D_b = 255;

// G string

    G_r = 255;
    G_g = 255;
    G_b = 255;

// B string

    B_r = 255;
    B_g = 255;
    B_b = 255;

// E String (high)

    Eh_r = 255;
    Eh_g = 255;
    Eh_b = 255;  
  } 
}
