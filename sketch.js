const WINDMILL_SIZE = 150;
const FAN_SIZE = 50;

let layer;
let numFans = 3;
let numWindmills = 2;

function setup() {
  	createCanvas(600, 600);
	const floorEquation = () => height - 30;
	layer = new Layer(floorEquation);

	for (let i = 0; i < numWindmills; i++) {
		var frictionFactor = random(0.98, 0.998);
		var windmill = new Windmill(WINDMILL_SIZE, numFans, frictionFactor);
		layer.attach(windmill);
	}
}
  
function draw() {
	background(153, 204, 255);
   	layer.show();

	if (mouseIsPressed){
		layer.applyWindForce(0.001);
	}

	layer.update();
}
