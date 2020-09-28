const canvasWidth = 960;
const canvasHeight = 500;
/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "shape1type" : "tri",
  "shape1pos1x" : 40,
  "shape1pos1y" : 10,
  "shape1pos2x" : 10,
  "shape1pos2y" : 60,
  "shape2type" : "null",
  "shape2pos1x" : 0,
  "shape2pos1y" : 0,
  "shape2pos2x" : 0,
  "shape2pos2y" : 0,
  "shape3type" : "null",
  "shape3pos1x" : 0,
  "shape3pos1y" : 0,
  "shape3pos2x" : 0,
  "shape3pos2y" : 0
}
const letterB = {
  "shape1type" : "circ",
  "shape1pos1x" : 10,
  "shape1pos1y" : 10,
  "shape1pos2x" : 35,
  "shape1pos2y" : 35,
  "shape2type" : "circ",
  "shape2pos1x" : 10,
  "shape2pos1y" : 35,
  "shape2pos2x" : 35,
  "shape2pos2y" : 60,
  "shape3type" : "null",
  "shape3pos1x" : 0,
  "shape3pos1y" : 0,
  "shape3pos2x" : 0,
  "shape3pos2y" : 0
}

const letterC = {
  "shape1type" : "circ",
  "shape1pos1x" : 10,
  "shape1pos1y" : 10,
  "shape1pos2x" : 60,
  "shape1pos2y" : 60,
  "shape2type" : "circ",
  "shape2pos1x" : 35,
  "shape2pos1y" : 15,
  "shape2pos2x" : 75,
  "shape2pos2y" : 55,
  "shape3type" : "null",
  "shape3pos1x" : 0,
  "shape3pos1y" : 0,
  "shape3pos2x" : 0,
  "shape3pos2y" : 0
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  //stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
 let i = letterData["shape1type"];
 let c = 0;
 let col1 = color(79, 214, 93) ;
 let col2 = color(240, 242, 92);
 let col3 = color(250, 113, 67);
 let values = [letterData["shape1type"], letterData["shape1pos1x"], letterData["shape1pos1y"], letterData["shape1pos2x"],letterData["shape1pos2y"],letterData["shape2type"], letterData["shape2pos1x"], letterData["shape2pos1y"],letterData["shape2pos2x"], letterData["shape2pos2y"],letterData["shape3type"], letterData["shape3pos1x"],letterData["shape3pos1y"],letterData["shape3pos2x"], letterData["shape3pos2y"]]
 while (i.valueOf() !== "null") {
    let type = values[c];
    let pos1 = createVector(values[c+1], values[c+2]);
    let pos2 = createVector(values[c+3], values[c+4]);
    let curCol;
    if (c === 0) { curCol = col1; }
    else if (c === 5) { curCol = col2; }
    else { curCol = col3; }

    if (type.valueOf() === "tri") {
      let width = (pos1.x - pos2.x) * 2;
      fill(curCol);
      triangle(posx + pos1.x, posy + pos1.y, posx + pos2.x, posy + pos2.y, posx + width + pos2.x, posy + pos2.y);

    }
    else if (type.valueOf() === "circ") {
      ellipseMode(CORNERS);
      fill(curCol);
      ellipse(posx + pos1.x, posy + pos1.y, posx + pos2.x, posy + pos2.y);
    }
    else if (type.valueOf() == "rect") {
      rectMode(CORNERS);
      fill(curCol);
      rect(posx + pos1.x, posy + pos1.y, posx + pos2.x, posy + pos2.y);
    }

    if (c === 10) { break;}
    c += 5;
    i = values[c];
 }

}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
