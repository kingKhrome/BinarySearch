// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          keyCode, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let target = Number(prompt('Enter an integer from 1-25, or not: '))

function wait(s) {
  let time = Date.now();
  let t = null;
  while (t - time < s) {
    t = Date.now(); }
}
// Copied sleep function
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
let upper = array.length-1
let lower = 0


function setup() {
	createCanvas(1000, 600);
	strokeWeight(0)
}


function show() {
  textSize(30);
  textAlign(CENTER);
  text('Target: ' +target,500, 50 )
  textSize(12);
  textAlign(LEFT);
  for(let i = 0; i<array.length; i++) {
    fill('gray');
    if (i === upper) {
      fill('blue');
      rect(35*i+50,500,30, -10*array[i]);
      text('Upper',35*i+50,540);
      text(array[i],35*i+60,520);
    }
    if (i == lower) {
      fill('red') ;
      rect(35*i+50,500,30, -10*array[i]);
      text('Lower',35*i+50,540);
      text(array[i],35*i+60,520);
    }
    else {
    rect(35*i+50,500,30, -10*array[i]);
    text(array[i],35*i+60,520);
    fill('gray');
  } 
  }
  }


function valFound(index) {
    wait(1000);
    fill('gold') ;
    rect(35*index+50,500,30, -10*array[index]);
    text(array[index],35*index+60,520);
    textSize(30)
    textAlign(CENTER)
    text('Found! Index = ' +index,500, 100 )
    noLoop()
  
}
function notFound(index) {
    wait(1000);
    fill('purple') ;
    rect(35*index+50,500,30, -10*array[index]);
    text(array[index],35*index+60,520);
    textSize(30)
    textAlign(CENTER)
    text('Not Found' ,500, 100 )
    noLoop()
  
}
function binarySearch() {
    if (array[upper] === target) return valFound(upper)
    if (array[lower] === target) return valFound(lower)
	let change = Math.round((upper+lower)/2);
    console.log(upper,lower,change)
	if (array[change] < target) {
		lower = change;
	} else {
         upper = change; 
       }
  if (upper === lower) {
    notFound(change)
  }
  if (array[upper] === target || array[lower] === target) {
  valFound(change); 
  }
}



function draw() {
  background(255);
  show()
  binarySearch()
  wait(1000)
}