var font;
var dots = [];
var ps;
var heuy = false;

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
	textSize(402);
	textAlign(CENTER)
	
	
}

function draw(){
	background(0,100);	
	fill(1,2,0,255)
	text("DAAN", windowWidth/2, windowHeight/2 + 100);
	loadPixels();
	ps = pixels;

	dots.forEach(function(dot){
		dot.move();
		dot.show();
	})
	

	if(!heuy){
		// console.log(pixels)
		heuy = true
	}
}



function Dot(){
	this.pos = createVector(Math.round(random(windowWidth)),Math.round(random(windowHeight)));
	this.speed = createVector(Math.round(random(1,10)),Math.round(random(1,10)));
	this.slowSpeed = createVector(Math.round(random(1,2)),Math.round(random(1,2)));
	this.r = 1;
	this.fill = 255;

	this.move = function(){
		var currentPixel = (this.pos.y * width * 2) + this.pos.x;
		var color = ps[currentPixel*4*2];

		// console.log
		if(color === 1){
			this.pos.add(this.slowSpeed);
			this.fill = 255;
		}else{
			this.pos.add(this.speed)
			this.fill = 80;
		}

		if(this.pos.y < 0){
			this.pos.y = windowHeight;
		}else if(this.pos.y > windowHeight){
			this.pos.y = 0;
		}

		if(this.pos.x < 0){
			this.pos.x = windowWidth;
		}else if(this.pos.x > windowWidth){
			this.pos.x = 0;
		}
		
	}

	this.show = function(){
		fill(this.fill);
		noStroke();
		ellipse(this.pos.x,this.pos.y,this.r,this.r)
	}
}