// Update this function to draw you own maeda clock on a 960x500 canvas
function draw(){
	background(0); 
	draw_clock();
}

function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
 	background(0); // black background

 	s = obj.seconds > 9 ? "" + obj.seconds : "0" + obj.seconds;
 	drawDoubletime(s,2); 

 	m = obj.minutes > 9 ? "" + obj.minutes : "0" + obj.minutes;
 	drawDoubletime(m,1);

 	h = obj.hours;
 	if (h == 12) {drawDoubletime(12,1);} //draws 12 o'clock
 	else if (h > 12) {h -= 12;}
 	draw_num(h,1,0);

}

function drawDoubletime(t,type){
	draw_num(t.substring(0,1),0,type);
	draw_num(t.substring(1,2),2,type);
}

//draws a specific number from 0 - 9 based on things
function draw_num(number, area, type) {
	//setting x value based on how far from the left
	x = 0;
	y = height/7; // space from the top
	d = 50 // diameter of circle
	spacing = 8; //space between circles
	let numberMatrix = new Array(7); //to create 


	//setting x value for each area
	if (area == 0) {x = width/5;}
	else if (area == 1) {x = width/5 + ((d+spacing) * 3);}
	else if (area == 2) {x = width/5 + ((d+spacing) * 6);}

	if (number == 0) {
		numberMatrix[0] = new Array(0,1,1,1,0);
		numberMatrix[1] = new Array(1,0,0,0,1);
		numberMatrix[2] = new Array(1,0,0,0,1);
		numberMatrix[3] = new Array(1,0,0,0,1);
		numberMatrix[4] = new Array(1,0,0,0,1);
		numberMatrix[5] = new Array(1,0,0,0,1);
		numberMatrix[6] = new Array(0,1,1,1,0);
			
	}
	else if (number == 1) {
		numberMatrix[0] = new Array(0,0,0,1,0);
		numberMatrix[1] = new Array(0,0,1,1,0);
		numberMatrix[2] = new Array(0,0,0,1,0);
		numberMatrix[3] = new Array(0,0,0,1,0);
		numberMatrix[4] = new Array(0,0,0,1,0);
		numberMatrix[5] = new Array(0,0,0,1,0);
		numberMatrix[6] = new Array(0,0,0,1,0);
	}
	else if (number == 2) {
		numberMatrix[0] = new Array(0,1,1,1,0);
		numberMatrix[1] = new Array(1,0,0,0,1);
		numberMatrix[2] = new Array(0,0,0,0,1);
		numberMatrix[3] = new Array(0,0,0,1,0);
		numberMatrix[4] = new Array(0,0,1,0,0);
		numberMatrix[5] = new Array(0,1,0,0,0);
		numberMatrix[6] = new Array(1,1,1,1,1);
	}
	else if (number == 3) {
		numberMatrix[0] = new Array(0,1,1,1,0);
		numberMatrix[1] = new Array(1,0,0,0,1);
		numberMatrix[2] = new Array(0,0,0,0,1);
		numberMatrix[3] = new Array(0,0,1,1,0);
		numberMatrix[4] = new Array(0,0,0,0,1);
		numberMatrix[5] = new Array(1,0,0,0,1);
		numberMatrix[6] = new Array(0,1,1,1,0);
	}
	else if (number == 4) {
		numberMatrix[0] = new Array(0,0,0,1,0);
		numberMatrix[1] = new Array(0,0,1,1,0);
		numberMatrix[2] = new Array(0,1,0,1,0);
		numberMatrix[3] = new Array(1,0,0,1,0);
		numberMatrix[4] = new Array(1,1,1,1,1);
		numberMatrix[5] = new Array(0,0,0,1,0);
		numberMatrix[6] = new Array(0,0,0,1,0);
	}
	else if (number == 5) {
		numberMatrix[0] = new Array(1,1,1,1,1);
		numberMatrix[1] = new Array(1,0,0,0,0);
		numberMatrix[2] = new Array(1,0,0,0,0);
		numberMatrix[3] = new Array(0,1,1,1,0);
		numberMatrix[4] = new Array(0,0,0,0,1);
		numberMatrix[5] = new Array(1,0,0,0,1);
		numberMatrix[6] = new Array(0,1,1,1,0);
	}
	else if (number == 6) {
		numberMatrix[0] = new Array(0,1,1,1,0);
		numberMatrix[1] = new Array(1,0,0,0,0);
		numberMatrix[2] = new Array(1,0,0,0,0);
		numberMatrix[3] = new Array(0,1,1,1,0);
		numberMatrix[4] = new Array(1,0,0,0,1);
		numberMatrix[5] = new Array(1,0,0,0,1);
		numberMatrix[6] = new Array(0,1,1,1,0);
	}
	else if (number == 7) {
		numberMatrix[0] = new Array(1,1,1,1,1);
		numberMatrix[1] = new Array(0,0,0,0,1);
		numberMatrix[2] = new Array(0,0,0,0,1);
		numberMatrix[3] = new Array(0,0,0,1,0);
		numberMatrix[4] = new Array(0,0,1,0,0);
		numberMatrix[5] = new Array(0,0,1,0,0);
		numberMatrix[6] = new Array(0,0,1,0,0);
	}
	else if (number == 8) {
		numberMatrix[0] = new Array(0,1,1,1,0);
		numberMatrix[1] = new Array(1,0,0,0,1);
		numberMatrix[2] = new Array(1,0,0,0,1);
		numberMatrix[3] = new Array(0,1,1,1,0);
		numberMatrix[4] = new Array(1,0,0,0,1);
		numberMatrix[5] = new Array(1,0,0,0,1);
		numberMatrix[6] = new Array(0,1,1,1,0);
	}
	else if (number == 9) {
		numberMatrix[0] = new Array(0,1,1,1,0);
		numberMatrix[1] = new Array(1,0,0,0,1);
		numberMatrix[2] = new Array(1,0,0,0,1);
		numberMatrix[3] = new Array(0,1,1,1,1);
		numberMatrix[4] = new Array(0,0,0,0,1);
		numberMatrix[5] = new Array(0,0,0,0,1);
		numberMatrix[6] = new Array(0,1,1,1,0);
	}

	for (let col = 0; col < 5; col++) {//draws circles
		for (let row = 0 ; row < 7; row++) {
			if (numberMatrix[row][col] == 1) {
				draw_circle(type, x + (col*d) + (col*spacing), y + (row*d) + (row*spacing));	 
			}
		}
	}
//draw_circle(type, x + (col*d) + (col*spacing), y + (row*d) + (row*spacing));
}

//draws a specific circle, large red, yellow middle, small blue.
function draw_circle(type,x,y) {
	strokeWeight(5);
	ellipseMode(RADIUS);
	noFill();
	size = 25; //setting size of circle
	//x = 11
	//y = 7
	if (type == 0) { // yellow circle
		stroke(255,245,112);

	}
	else if (type == 1){ // red circle
		stroke(255,163,187);
		size -= 6;
	}
	else { //blue circle
		stroke(138,226,255);
		size -= 12;
	}

	ellipse(x,y,size,size); //actually draws the circls
}
