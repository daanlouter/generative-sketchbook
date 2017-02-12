var center;
var xLength = 40;
var yLength = 40;
var dots = []

var colorScale = chroma.scale(['white', 'red']).mode('lab');

function setup(){
	background(0);
	createCanvas(windowWidth,windowHeight)
	for(var x=0; x<xLength; x++){
		for (var y=0; y<yLength; y++){
			dots.push(new Dot(x,y))
		}
	}
}

function draw(){
	background(0);
	dots.forEach(function(dot){
		dot.move();
		dot.show();
	})
}

function Dot(x,y){
	this.x = ((windowWidth - (xLength * 15)) / 2) + x*15;
	this.y = ((windowHeight - (yLength * 15)) / 2) + y*15;
	this.size = 10;
	this.filled = false;

	this.move = function(){
		this.x += random(-10,10)
		this.y += random(-5,5)
	}

	this.show = function(){
		var sc = colorScale(this.x / windowWidth).rgba();
		// console.log(sc)
		fill(Math.round(sc[0]),Math.round(sc[1]),Math.round(sc[2]),255)
		noStroke();
		ellipse(this.x,this.y,this.size,this.size)
	}
}