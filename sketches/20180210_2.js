var r = 0;
var amount = 120;
var length = Math.min(window.innerWidth, window.innerHeight) / 2;
var stripes = [];

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	var fov = 60 / 180 * PI;
	var cameraZ = height / 2.0 / tan(fov / 2.0);
	perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 10);
}
function draw() {
  background(200);
  orbitControl();
  for (var i = -100; i < 200; i++) {
    for (var j = -200; j < 300; j++) {
      push();
      translate(i * 16, 0, j * 16);
      box(40, 40, 40);
      pop();
    }
  }
}