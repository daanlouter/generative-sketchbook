var birds = [];
var birdCount = 1000;
var j = 0;
var string = "03256c-2541b2-1768ac-06bee1-ffffff";
var colors = string.split("-").map(function(col) {
	return "#" + col;
}).sort(function(a,b){ return Math.random() > 0.5});
// colors.unshift("#fff");
// var colors = ["#fff","#6b2d5c","#474973","#f0386b","#ff5376","#2b59c3"];
var background_c = "#000";

function setup() {
	background(0);
	createCanvas(windowWidth,windowHeight)
	for(var i = 0; i<birdCount; i++) {
		birds.push(new Bird(i));
	}
}

function draw() {
	background(0);
	
	for(var i = 0; i<birdCount; i++) {
		birds[i].move();
		birds[i].show();
	}
}

function Bird(index) {
	this.x,this.y;
	this.start_x = random(width);
	this.start_y = random(height);
	this.move_x = random(-10,10);
	this.move_y = random(-10,10);
	this.line = [];
	this.fill = color(colors[index % 5]);
	this.opacity = random(255);
	this.fader = -3;

	// console.log(this.fill[0]);

	this.show = function() {
		beginShape();
		noFill();
		stroke(this.fill.levels[0],this.fill.levels[1],this.fill.levels[2],this.opacity);
		strokeWeight(1);
		for(var i = 0; i<this.line.length; i++) {
			vertex(this.line[i][0],this.line[i][1])
		}
		endShape();
	}

	this.move = function() {
		this.move_y += 0.01;
		this.move_x += 0.01;

		if(this.opacity < 0 || this.opacity > 255) this.fader *= -1;
		this.opacity += this.fader;

		this.x = this.start_x + (noise(this.move_x) * 70);
		this.y = this.start_y + (noise(this.move_y) * 70);

		this.line.push([this.x, this.y]);
		
		if(this.line.length > 20) {
			this.line.shift();
		}
	}
}