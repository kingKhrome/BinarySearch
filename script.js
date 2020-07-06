// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          keyCode, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

function setup() {
  createCanvas(400, 400);
  background(255)
  noFill()
  strokeWeight(5)
  
  
  stroke('blue')
  arc(50, 150, 50, 50,0, PI); //bott
  
 
  stroke('black')
  arc(110, 150, 50, 50,PI, 0); //top
  arc(110, 150, 50, 50,0, PI); //bott
  
  
  stroke('green')
  arc(140, 175, 50, 50,PI, 0); //top
  arc(140, 175, 50, 50,0, PI); //bott
  
  stroke('red')
  arc(170, 150, 50, 50,PI, 0); //top
  arc(170, 150, 50, 50,0, PI); //bott
  
  stroke('yellow')

  arc(80, 175, 50, 50,PI, 0); //top
  arc(80, 175, 50, 50,0, PI); //bott
  
  stroke('black')
  arc(110, 150, 50, 50,0, PI); //bott
  
  stroke('blue')
  arc(50, 150, 50, 50,PI, 0); //top
  
  
}

