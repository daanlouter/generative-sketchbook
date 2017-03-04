var vs = [];
var count = 0;
var radius = 1;

var colorScale = chroma.scale(['#fff', '#000']).mode('lab');

function setup(){
	count = Math.ceil(windowWidth/radius);
	background(0);
	createCanvas(windowWidth,windowHeight)

	for(var i =0; i<count; i++){
		vs.push(new Vehicle(random(width),20,i))
	}
}

function draw(){
	background(0,100);

	
	// v.seek(target)
	vs.forEach(function(v){
		v.applyForce(createVector(0,0.04))
	
		v.move();
		v.show();
		// v.line();
	})

	
}

function Vehicle(x,y,i){
	this.pos = createVector((width/count)*i,y);
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
	this.mass = map(i,0,count,0.1,.2);
	this.maxSpeed = 5;
	this.offset = random(0.2);
	this.fill = colorScale(this.pos.x/width).rgb();

	this.applyForce = function(force){
		var f = force.copy();
		f.div(this.mass);
		this.acc.add(f);
	}

	this.move = function(){
		var distance = height - this.pos.y;
		var wind = this.pos.y > height/2 ? map(distance, 0, height/2, -0.16,0) : 0;

		if(mouseIsPressed){
			wind -= random(-0.05,0.05);
		}

		this.applyForce(createVector(0,wind))


		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0,0);
	}

	this.show = function(){
		fill(this.fill);
		noStroke();
		var r = 10 * this.mass;
		ellipse(this.pos.x,this.pos.y,radius,radius)
	}
}