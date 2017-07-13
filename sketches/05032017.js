var font;
var dots = [];
var ps;
var heuy = false;
var p;

function preload(){
	font = loadFont('walsheim.otf');
	for(var i=0; i<5000;i++){
		dots.push(new Dot())
	}
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0);
	textFont(font);
	textSize(302);
	textAlign(CENTER)
	
	p = pixelDensity();

	console.log(p);
}

function draw(){
	background(0);	
	fill(2,2,0,255)
	text("FLOURISH", windowWidth/2, windowHeight/2 + 100);
	loadPixels();
	ps = pixels;

	dots.forEach(function(dot){
		dot.move();
		dot.show();
	})
	
}



function Dot(){
	this.pos = createVector(Math.round(random(windowWidth)),Math.round(random(windowHeight*.25,windowHeight*0.75)));
	this.speed = createVector(Math.round(random(1,10)),Math.round(random(1,10)));
	this.slowSpeed = createVector(Math.round(random(1,2)),Math.round(random(1,2)));
	this.r = 1;
	this.fill = 255;
	this.showing;

	this.move = function(){
		var currentPixel = (this.pos.y * width * p) + this.pos.x;
		var color = ps[currentPixel*4*p];

		// console.log
		if(color === 2){
			this.pos.add(this.slowSpeed);
			this.fill = 255;
			this.r = 4;
			this.showing = true;
		}else{
			this.showing = false;
			this.pos.add(this.speed)
			this.fill = 80;
			this.r = 0;
		}

		if(this.pos.y < 0){
			this.pos.y = windowHeight;
		}else if(this.pos.y > windowHeight*0.75){
			this.pos.y = 0;
		}

		if(this.pos.x < 0){
			this.pos.x = windowWidth;
		}else if(this.pos.x > windowWidth){
			this.pos.x = 0;
		}
		
	}

	this.show = function(){
		if(!this.showing) { return }
		fill(this.fill);
		noStroke();
		ellipse(this.pos.x,this.pos.y,this.r,this.r)
	}
}