var groceries = [];
var total = 7;

var recordDistance;
var bestEver;

function setup() {
	createCanvas(800,600);

	for(var i=0; i<total; i++) {
		groceries[i] = createVector(random(width),random(height));
	}

	var d = calcDistance(groceries);
	recordDistance = d;
	bestEver = groceries.slice();
}

function draw() {
	background(0);
	fill(255);

	strokeWeight(1);
	stroke(255);
	for(var i=0; i< groceries.length; i++) {
		ellipse(groceries[i].x, groceries[i].y,8,8)
	}

	// 
	stroke(255,100);
	noFill();

	beginShape();
	for(var i=0; i< groceries.length; i++) {
		vertex(groceries[i].x, groceries[i].y)
	}
	endShape();

	// 
	strokeWeight(2);
	stroke(255,100,0);
	
	beginShape();
	for(var i=0; i< bestEver.length; i++) {
		vertex(bestEver[i].x, bestEver[i].y)
	}
	endShape();

	// 
	var i = floor(random(groceries.length));
	var j = floor(random(groceries.length));
	swap(groceries,i,j);

	var d = calcDistance(groceries);
	if(d < recordDistance) { 
		recordDistance = d;
		bestEver = groceries.slice();
	}
}

function swap(a, i, j) {
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

function calcDistance(points) {
	var sum = 0;

	for(var i = 0; i<points.length; i++) {
		if(i < points.length - 1) {
			var d = dist(points[i].x, points[i].y,points[i+1].x,points[i+1].y);
			sum += d;
		}
	}

	return sum;
}