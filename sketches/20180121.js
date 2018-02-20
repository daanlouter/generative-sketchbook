var gap = 100;
var lights = [];
var amount_x, amount_y;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);

	amount_x = Math.round(width / gap);
	amount_y = Math.round(height / gap);

	for (var x = 0; x < amount_x; x++) {
		for (var y = 0; y < amount_y; y++) {
			var on = x == 4 && y == 4;
			lights.push(new Light(x, y, on));
		}
	}
	lights.forEach(function(light) {
		light.addNeighbours();
		light.show();
	})
	// frameRate(1);
}

function draw() {
	lights.forEach(function(light, i) {
		light.checkNeighbours();
	})
}

function Light(x, y, on) {
	this.x = x * gap;
	this.y = y * gap;
	this.index = (x * amount_y) + y;
	this.r = 10;
	this.fill = 20;
	this.on = on;
	this.pause = false;
	this.found = false;
	this.neighbours = [];
	this.count = 0;
	var self = this;
	
	this.addNeighbours = function() {
		this.neighbours = [
			lights[this.index - 1],
			lights[this.index + 1],
			lights[this.index - amount_y],
			lights[this.index + amount_y]
		]
	}

	this.checkNeighbours = function() {
		if(self.on) {
			self.count++;
			if(self.count > 2) {
				self.count = 0;
				self.on = false;
			}
		} else {

			for(key in this.neighbours) {
				var light = this.neighbours[key];
				if(light && !self.on) {
					if(light.on) {
						setTimeout(function(){
							self.on = true;
							self.show();
						}, 1000)
						
					}
				}
			}
		}
	}

	this.show = function() {
		if (this.on || this.found) {
			this.fill = 255;
		} else {
			this.fill = 20;
		}
		fill(this.fill);
		ellipse(this.x, this.y, this.r);
	}
}