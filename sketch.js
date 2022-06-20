const WINDMILL_SIZE = 150;
const FAN_SIZE = 50;

let windmill;
let numFans = 3;
let angularSpeed = 0.01;

function setup() {
  	createCanvas(600, 600);

	let fans = [];
	let angle = 0;
	for(let i = 0; i < numFans; i++) {
		fans.push(new Fan(FAN_SIZE, angle));
		angle += TWO_PI / numFans;
	}

	windmill = new Windmill(WINDMILL_SIZE, fans);
}
  
function draw() {
	background(150, 125, 255);
   	windmill.show(width/2, height);

	if (mouseIsPressed){
		windmill.applyWindForce(0.001);
	}

	windmill.update();
}