// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          keyCode, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

function setup() {
  createCanvas(400, 400);
  background(255);
  noFill();
  strokeWeight(5);
  
  stroke('black')
  ellipse(110,150,50);
  
  stroke('green')
  ellipse(140,175,50);
  
  stroke('yellow')
  ellipse(80,175,50);
 
  stroke('blue')
  ellipse(50,150,50);
  
  stroke('yellow')
  arc(80, 175, 50, 50,PI-.3, PI+.3); 
  
  stroke('black')
  arc(110, 150, 50, 50,-PI/2, -PI/2 -.3); 
  
  stroke('green')
  arc(140, 175, 50, 50,PI-.3, PI+.3); 

  stroke('red')
  ellipse(170,150,50);
  
  stroke('green')
  arc(140, 175, 50, 50,0, -PI/2); 

}
