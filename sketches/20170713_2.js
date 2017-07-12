var step = 100;
var dots = [];

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0,0,0,255);
	angleMode(DEGREES);
	var i = 0;

	for(var x = 0; x < width; x += step){
		for(var y = 0; y <height; y += step){
			i++;
			if(random() < 0.7){ 
				dots.push( new dot(x,y,i) )
			}
			
		}
	}
}

function draw(){
	background(0,0,0,200);
	for(var i = 0; i < dots.length; i += 1){
		dots[i].display(frameCount);
	}
}

function dot(x,y,i){
	this.x = x;
	this.y = y;
	this.direction = random([0,90]);
	this.count = 0;
	this.rot = random([-2,2]);
	this.step = random([90]);

	this.display = function(f){
		if(f % 90 === 0){
			this.count = this.step;
		}

		if(this.count > 0){
			this.direction+= this.rot;
			this.count -= 2;
		}
		
		stroke(255,255,255);
		strokeWeight(2);
		push();
		translate(this.x,this.y)
		rotate(this.direction);
		line(0,0,step, 0);
		pop();	
	}

	
}