var r = 0;
var amount = 120;
var length = Math.min(window.innerWidth, window.innerHeight) / 2;
var stripes = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB, 255);
	for(var i = 0; i<amount; i++ ) {
		stripes.push(new Stripe(i))
	}
	// blendMode(DARKEST);
	// frameRate(1);
}

function draw() {
	// r+= 0.01;
	background(0,20);
	for(var i = 0; i<amount; i++ ) {
		noFill();
		push();
		translate(windowWidth/2, windowHeight/2)
		rotate((PI/amount) * i + r)
		stripes[i].update();
		stripes[i].dot();
		// stripes[i].show();
		pop();
	}
}

function Stripe(i) {
	this.h = random(25);
	this.c = color(this.h, 0, 0);
	this.w = 4;
	this.seed = random(10);
	this.length = length;
	this.x = 0;
	this.y = i * 2;
	this.speed = 10 + ((2/amount));
	this.mult = 1;

	this.show = function() {
		stroke(this.c);
		strokeWeight(this.w);
		line(-this.length/2,0,this.length/2,0);
	}

	this.dot = function() {
		this.y += this.speed;
		if(this.y > this.length || this.y < -this.length) this.speed *= -1;
		fill(this.c);
		noStroke();
		ellipse(this.x, this.y,4);
	}

	this.update = function() {
		this.seed++;
		this.h += (noise(this.seed) * this.mult);
		if(i == 0) console.log(this.h)
		if(this.h > 25) this.mult *= -1;
		else if (this.h < 0) this.mult *= -1;
		this.c = color(this.h, 200, 255);
	}
}