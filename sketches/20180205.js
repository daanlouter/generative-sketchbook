function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	// frameRate(1);
}

function draw() {
	background(0,0,0,40);
	beginShape();
	for(var i = 0; i<8; i++ ) {
		stroke(255,random(255),random(255),255);
		noFill();
		strokeWeight(10);
		// translate(windowWidth/2, windowHeight/2)
		// push();
		// rotate((PI) * i)
		// line(random(width),10,100,random(height));
		curveVertex(random(width), random(height))
		// pop();
	}
	endShape();
}