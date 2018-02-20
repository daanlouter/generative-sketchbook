let spacing = 50;


function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0,0,0,255);
	frameRate(10);
}

function draw(){
	background(0	);
	stroke(255,255);
	for(var x = 0; x < Math.ceil(width/spacing); x++) {
		for(var y = 0; y < Math.ceil(height/spacing); y++){
			var pos = createVector(x * spacing, y * spacing);
			var mouse_pos = createVector(mouseX,mouseY);
			var d = dist(pos.x,pos.y,mouse_pos.x,mouse_pos.y);

			var d_mapped = map(d,0,1200,0,1);
			
			if(d_mapped > 0.2) {
				strokeWeight(30);
				stroke(255,100,100,255);
				line(pos.x,pos.y,pos.x + spacing, pos.y+spacing)
			}else {
				stroke(255,100,100,255);
				strokeWeight(30);
				line(pos.x, pos.y +spacing, pos.x +spacing, pos.y)
			}
		}
	}
}