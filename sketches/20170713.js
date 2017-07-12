var step = 20;
var dots = [];

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0);
	angleMode(DEGREES);

	for(var x = 0; x < width; x += step){
		for(var y = 0; y <height; y += step){
			dots.push( new dot(x,y) )
		}
	}
}

function draw(){
	background(0);
	for(var i = 0; i < dots.length; i += 1){
		dots[i].display();
	}	
}

function dot(x,y){
	this.o = random();
	this.x = x;
	this.y = y;
	this.s = random() / 5;

	this.display = function(){
		this.o += this.s;
		if(this.o > 1 || this.o < 0){
			this.s *= -1;
		}

		fill(255,255,255,this.o * 255);
		ellipse(this.x,this.y,4,4);
	}
}