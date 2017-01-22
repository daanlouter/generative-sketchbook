var center;
var gravity = 200;
var count = 400;
var dots = [];

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0);
	centerX = width/2;
	centerY = height/2;
	for(var i=0; i<count; i++){
		dots.push(new Dot())
	}
}

function draw(){
	background(0);
	noStroke();

	for(var i=0; i<count; i++){
		dots[i].show();
		dots[i].update();
	}
}



function Dot(){
	this.angle = random(360);
	this.speed = random(-0.01,0.01) ;
	this.gravity = random((height/3) - 80,(height/3));
	this.radius = random(1,3);
	this.moving = random() > 0.8 ? random((height/8)-40,(height/8)+40) : false;
	this.x, this.y;

	this.show = function(){
		fill(41,25,92,255)
		noStroke();
		fill(255)
		// fill(this.g,this.r,255,random(25))
		ellipse(this.x,this.y,this.radius,this.radius)
	}

	this.update = function(){
		if(this.moving){
			if(this.gravity > this.moving){
				this.gravity -= 0.5;
			}
		}
		this.x = centerX + sin(this.angle) * this.gravity;
		this.y = centerY + cos(this.angle) * this.gravity;
		this.angle += this.speed;
	}

	this.moveRing = function(){
		if(!this.movedRing){
			this.movedRing = true;

		}
	}
}
