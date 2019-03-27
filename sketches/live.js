var mic;
var c = 0;

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0);
	blendMode(BLEND);
	mic = new p5.AudioIn();
	mic.start();
	frameRate(10);
}

function draw(){
	var moused = map(mouseX, 0,windowWidth,0,255);
	console.log(moused);
	background(0,moused);
	var vol = mic.getLevel();
	var h = map(vol, 0, 1, windowWidth/2, 10);
	var max = map(vol, 0, 1, 10,30);
	var width = map(vol, 0, 1, 0,200);
	var distance = h;
	c = c < 255 ? c + 1 : 0;
	noStroke();
	beginShape();
	strokeWeight(width);
	for(var i = 0; i < 3; i++) {
		fill(random(100,255),c,random(0,100));
		// stroke(random(255),c,random(0,100));
		// noFill();
		vertex(windowWidth/2 + random(-h,h), height/2 + random(-h, h))
		// ellipse(random(0,windowWidth),random(0,windowHeight),40)
	} 

	endShape();

	  // Draw an ellipse with height based on volume
}
