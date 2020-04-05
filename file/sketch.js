function setup() {
	createCanvas(400,400);
  // put setup code here
}

function draw() {
	var x1=map(mouseY, height, 0, 100, 150);
	var nsize = width/8+cos(mouseY*PI/180)*width/16;
	fill(255-x1,mouseX,mouseY,100);
	stroke(255);
	ellipse(mouseX, mouseY, nsize, x1);
	ellipse(mouseX, mouseY, x1, nsize);
  // put drawing code here
}