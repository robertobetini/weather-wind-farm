const WINDMILL_SIZE = 150;
const FAN_SIZE = 50;
const NUM_LAYERS = 3;

let layers = [];
let numFans = 3;
let numWindmills = 2;

function setup() {
  	createCanvas(800, 600);
	for (let i = 0; i < NUM_LAYERS; i++) {
		const floorEquation = () => height - 50 - 10*Math.pow(2.8, i);
		layer = new Layer(floorEquation);

		for (let j = 0; j < numWindmills + i; j++) {
			let distanceFactor = 1 / Math.pow(1.8, i);
			let windmillSize = WINDMILL_SIZE*distanceFactor;
			let fanSize = FAN_SIZE*distanceFactor;
			let frictionFactor = random(0.98, 0.998);

			let windmill = new Windmill(windmillSize, numFans, fanSize, frictionFactor);
			layer.attach(windmill);
		}

		layers.unshift(layer);
	}
}
  
function draw() {
	background(153, 204, 255);
	for (let layer of layers) {
		layerGraphics = layer.draw();
		image(layerGraphics, 0, 0);
	}
	
	if (mouseIsPressed){
		for (let layer of layers) {
			layer.applyWindForce(0.001);
		}
	}
	
	for (let layer of layers) {
		layer.update();
	}
}
