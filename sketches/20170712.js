var chain = [];
var seedX;
var seedY;

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0);
	angleMode(DEGREES);
	// blendMode(SCREEN);
	seedX = random();
	seedY = random();
	console.log(seedX)
	var start = createVector(noise(seedX)*width,noise(seedY)*height);
	chain.push(start);
}

function draw(){
	seedX+= 0.01,seedY += 0.01;
	background(0);
	var latest = chain[chain.length - 1];
	var offset = createVector(random(-1,1),random(-1,1));
	offset.mult(10);
	var next = createVector(noise(seedX)*width,noise(seedY)*height)
	// next.rotate(random(-1,1));

	chain.push(next);

	if(chain.length > 500){
		chain.shift();
	}

	var r = random(-20,20)

	noFill();

	stroke(150,200,255,255);
	strokeWeight(1);
	
	beginShape();
	for( var i=1; i<chain.length; i++ ){
		curveVertex(chain[i].x + 1,chain[i].y + 1);
	}
	endShape();


	stroke(150,200,255,70);

	beginShape();
	for( var i=1; i<chain.length; i++ ){
		curveVertex(chain[i].x - random(-5,5),chain[i].y - random(-5,5));
	}
	endShape();

	beginShape();
	for( var i=1; i<chain.length; i++ ){
		curveVertex(chain[i].x - random(-5,5),chain[i].y - random(-5,5));
	}
	endShape();

	beginShape();
	for( var i=1; i<chain.length; i++ ){
		curveVertex(chain[i].x - random(-5,5),chain[i].y - random(-5,5));
	}
	endShape();

	beginShape();
	for( var i=1; i<chain.length; i++ ){
		curveVertex(chain[i].x - random(-5,5),chain[i].y - random(-5,5));
	}
	endShape();

	beginShape();
	for( var i=1; i<chain.length; i++ ){
		curveVertex(chain[i].x - random(-5,5),chain[i].y - random(-5,5));
	}
	endShape();

	beginShape();
	for( var i=1; i<chain.length; i++ ){
		curveVertex(chain[i].x - random(-5,5),chain[i].y - random(-5,5));
	}
	endShape();

	
	
	


	




	

	
	
}