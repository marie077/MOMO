// global variables
let xHead = 305;
let xNeck = 304;
let xBody = 325;
let xEye = 311;
let r = 255;
let g = 255;
let b = 255;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  // mapping range values for sky color
  
  let rSky = map(mouseY, 0, 400, 255, 138);
  let gSky = map(mouseY, 0, 400, 218, 43);
  let bSky = map(mouseY, 0, 400, 185, 226);
  background(rSky, gSky, bSky);
  noStroke();
  
  // caddy
  fill(r, g, b);
  rect(xNeck, 50, 20, 50);
  ellipse(xHead, 50, 39, 20);
  ellipse(xBody, 115, 70, 40);
  fill(0);
  circle(xEye, 47, 5);
  
  //ocean
  fill(0,191,255);
  circle(10, 117, 30);
  circle(40, 117, 30);
  circle(70, 117, 30);
  circle(100, 117, 30);
  circle(130, 117, 30);
  circle(160, 117, 30);
  circle(190, 117, 30);
  circle(220, 117, 30);
  circle(250, 117, 30);
  circle(280, 117, 30);
  circle(310, 117, 30);
  circle(340, 117, 30);
  circle(370, 117, 30);
  circle(400, 117, 30);
  // grass
  fill(127,255,0)
  rect(0, 120, 400, 400);
  
  stroke(0);
  // road
  fill(192);
  quad(0, 285, 400, 123, 400, 225, 0, 450);
  
  noFill();
   // halo
  stroke(255, 204, 0);
  strokeWeight(9);
  ellipse(200, 117, 70, 20);
  stroke(0);
  strokeWeight(1);
  ellipse(200, 117, 57, 10);
  stroke(0);
  strokeWeight(1);
  ellipse(200, 117, 82, 28);

  stroke(0);
  strokeWeight(1);
  
   //backseat
  //black color for backseat
  fill(0,0,0);
  beginShape();
  vertex(265, 188);
  vertex(249, 189);
  vertex(250, 199);
  vertex(262, 196);
  endShape();
  
  // black color for the wheels
  fill(0,0,0);
  //right wheel 1
  rect(216, 242, 20, 50);
  ellipse(217, 267, 25, 50);
  ellipse(236, 267, 25, 50);
  
  //right wheel 2
  rect(295, 217, 20, 50);
  ellipse(296, 242, 20, 50);
  ellipse(315, 242, 20, 50);
  
  //left wheel 1
  rect(45, 240, 20, 50);
  ellipse(45, 265, 25, 50);
  ellipse(65, 265, 25, 50);
  
  //hubcap 1
  // gray fill
  fill(200);
  ellipse(234, 268, 20, 33);
  ellipse(315, 243, 15, 33);
  
  
  // light pink for the car body, hood, dash, mirror
  fill(mouseX, 218, 221);
  stroke(0);
 
   //hood
  quad(99, 199, 250, 199, 202, 242, 50, 237);
  quad(50, 237, 202, 241, 210, 257,43, 253);
  quad(42, 253, 221, 258, 202, 284, 50, 281);
  
  //body
  beginShape();
  vertex(202, 242);
  vertex(250, 200);
  vertex(287, 191);
  vertex(319, 202);
  vertex(321, 218);
  vertex(306, 229);
  vertex(289, 266);
  vertex(248, 282);
  vertex(248, 256);
  vertex(249, 245);
  vertex(245, 238);
  vertex(233, 237);
  vertex(219, 257);
  vertex(210, 257);
  endShape();
  
   //car mirror
  ellipse(275,195, 25, 20)
  
  //dash
  quad(153, 148, 245, 148, 250, 200, 99, 200);
  quad(245, 148, 249, 147, 263, 195, 258, 196);
  quad(245, 148, 247, 147, 157, 144, 154, 147);
  
  //door handle
  fill(211, 211, 211);
  ellipse(278, 217, 10,5);
  
   // light blue for window color
  fill(173, 216, 230);
  
  //a-shaped window
  triangle(246,155, 249, 199, 259, 197);
  
  //dash window
  quad(156, 154, 240, 153, 243, 199, 110, 199);
  
  // gray color for headlight container
  fill(100, 100, 100);
  
  //headlights left closed
  rect(70, 213, 20, 25);
  triangle(90, 214, 104, 223, 90, 237);
  
  //headlights right closed
  rect(180, 216, 20, 25);
  triangle(200, 217, 213, 232, 200, 240);
  
  // yellow for color of headlights
  fill(255, 255, 0);
  //lights
  circle(80, 225, 19);
  circle(190, 228, 19)
  
  //car grille black
  fill(0,0,0);
  ellipse(117, 267, 90, 17);
  
  //white tooth
  fill(255, 255, 255);
  triangle(83, 262, 86, 265, 92, 260);
  
  //second headlights light gray
  fill(211, 211, 211);
  ellipse(77, 245, 20, 10);
  ellipse(180, 248, 20, 10);     
}

function mouseClicked() {
  // random caddy color on mouseclick
  r = random(255);
  g = random(255);
  b = random(255);
  
  // caddy left movement on mouseclick
  xHead = xHead - 20;
  xNeck = xNeck - 20;
  xBody = xBody - 20;
  xEye = xEye - 20;
  print(mouseX, mouseY);
}
 

