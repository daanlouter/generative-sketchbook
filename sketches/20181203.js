var block_size = 50;
var margin = 100;
var quantity_x, quantity_y;
var wheels = [];
var figures = [];

function setup(){
	createCanvas(windowWidth,windowHeight)
	quantity_x = Math.floor(width / (block_size + margin)) - 1;
	quantity_y = Math.floor(height / (block_size + margin)) - 1;

	for (var dimension = 0; dimension < 2; dimension++) {
		wheels.push([]);
		var count = 1;
		var quantity = dimension == 0 ? quantity_x : quantity_y;
		for (var offset = 1; offset < quantity + 1; offset++) {
			var total_block_size = block_size + margin;
			var calculated_offset = (offset * total_block_size) + total_block_size * 0.5;
			var wheel;
			count++;
			if (dimension == 0) {
				wheel = new Wheel(calculated_offset, (total_block_size) * 0.5, dimension, count);
			}
			else {
				wheel = new Wheel(total_block_size * 0.5, calculated_offset, dimension, count);
			}
			wheels[dimension].push(wheel);
		}
	}

	for (var x=0; x < quantity_x; x++) {
		for (var y=0; y < quantity_y; y++) {
			var figure = new Figure(x, y);
			figures.push(figure);
		}
	}
}

function draw(){
	background(0);

	wheels.forEach(function(dimension, i) {
		dimension.forEach(function(wheel) {
			push();
			translate(wheel.x, wheel.y);
			wheel.updateAngle();
			wheel.show();
			wheel.circle();
			wheel.line();
			pop();
		});
	});

	figures.forEach(function(figure, i) {
		figure.line();
		figure.point();
	})
}

function Figure(index_x, index_y) {
	this.wheel_x = wheels[0][index_x];
	this.wheel_y = wheels[1][index_y];
	this.r = Math.floor((index_x / quantity_x) * 255);
	this.g = Math.floor((index_y / quantity_y) * 255);
	this.first = null;
	this.history = [];

	this.point = function() {
		fill(0);
		stroke(this.r,this.g,200);
		var coordinates = [this.wheel_x.x + this.wheel_x.circle_x,this.wheel_y.y + this.wheel_y.circle_y];
		this.history.push(coordinates);
		if (this.history.length > 200) this.history.shift();
		ellipse(coordinates[0], coordinates[1], 4)
	}
	this.line = function() {
		noFill();
		stroke(this.r,this.g,200);
		strokeWeight(2);
		beginShape();
		this.history.forEach(function(coordinate) {
			vertex(coordinate[0],coordinate[1]);
		})
		endShape();
	}
}

function Wheel(x, y, dimension, count) {
	this.dimension = dimension;
	this.x = x;
	this.y = y;
	this.r = block_size;
	this.speed = 0.01 * count;
	this.angle = 0;

	this.circle_x, this.circle_y;

	var self = this;

	this.show = function() {
		stroke(255,0);
		noFill();
		ellipse(0, 0, this.r);
	}

	this.updateAngle = function() {
		this.angle = ((this.angle + this.speed) % 359);
		this.circle_x = sin(this.angle) * (this.r / 2);
		this.circle_y = cos(this.angle) * (this.r / 2);
	}

	this.circle = function() {
		fill(255);
		ellipse(this.circle_x, this.circle_y, 4);
	}

	this.line = function() {
		stroke(255,50);
		strokeWeight(1);
		if (this.dimension == 0) {
			var last = wheels[1][quantity_y - 1];
			line(this.circle_x, this.circle_y, this.circle_x, last.y + last.circle_y - this.y);
		}
		else {
			var last = wheels[0][quantity_x - 1];
			line(this.circle_x, this.circle_y, last.x + last.circle_x - this.x, this.circle_y);
		}
	}
}