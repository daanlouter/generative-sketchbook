var center;
var gravity = 200;
var count = 20 * 4;
var dots = [];

function setup(){
	createCanvas(windowWidth,windowHeight);
	// blendMode(HARD_LIGHT);
	background(240);
	centerX = width/2;
	centerY = height/2;
	for(var i=0; i<count; i++){
		dots.push(new Dot())
	}
}

function draw(){
	background(240,100);
	noStroke();

	for(var i=0; i<count; i++){

		dots[i].vert(i);
		// dots[i].show();
		// dots[i].quad(i);
		dots[i].update();
	}
}



function Dot(){
	this.angle = random(360);
	this.speed = random(-0.01,0.01)* 2 ;
	this.gravity = random((height/3) - 20,(height/3) + 20);
	this.radius = random(1,2);
	this.g = random(255);
	this.r = random(255);
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
				// this.gravity -= 0.5;
				// this.radius += 0.005;
			}
		}
		this.x = centerX + sin(this.angle) * this.gravity;
		this.y = centerY + cos(this.angle) * this.gravity;
		this.angle += this.speed;
	}


	this.vert = function(index){
		if(index%4 === 0){
			noFill();
			stroke(this.g,this.r,255,255);
			// fill(this.g,this.r,255,255);
			strokeWeight(18);
			beginShape();
			vertex(this.x,this.y);
			quadraticVertex(dots[index+1].x,dots[index+1].y,dots[index+2].x,dots[index+2].y)
			endShape()
		}
	}

	this.quad = function(index){
		if(index%4 === 0){
			stroke(this.g,this.r,255,255);
			strokeWeight(10)
			fill(this.g,this.r,255,10);
			quad(this.x,this.y,dots[index+1].x,dots[index+1].y,dots[index+2].x,dots[index+2])
		}
	}

	this.moveRing = function(){
		if(!this.movedRing){
			this.movedRing = true;

		}
	}
}
