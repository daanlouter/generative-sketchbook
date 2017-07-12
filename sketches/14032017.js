var cs = []

function setup(){
	createCanvas(windowWidth,windowHeight)

	for(var i=1; i< 9; i++){
		cs.push(new circle(i))
	}
}

function draw(){
	background(0);
	cs.forEach(function(c){
		c.update();
		c.show();
	})
}

function circle(g){
	this.x = width/2;
	this.y = height/2;
	this.gravity = g * 50;
	this.yAngle = 0;
	this.xAngle = 0;
	this.speed = .05 + (g/1000);
	this.multiplier = 1;

	this.update = function(){
		this.x = width/2 + sin(this.xAngle) * this.gravity;
		this.y = height/2 + cos(this.yAngle) * this.gravity;

		if(cos(this.yAngle) < 0){
			this.multiplier *= -1;
		}
		
		this.xAngle += this.speed * this.multiplier;
		this.yAngle += this.speed * this.multiplier;

	}

	this.show = function(){
		fill(255);
		ellipse(this.x,this.y,10,10)
	}
}