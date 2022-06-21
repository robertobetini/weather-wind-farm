class Windmill {
    constructor(windmillSize, numFans, frictionFactor = 0.995) {
        this.windmillSize = windmillSize;
        this.generateFans(numFans, frictionFactor);
    }

    show(x, y) {
        push();
        translate(x, y);
        line(0, 0, 0, -this.windmillSize);

        for (let fan of this.fans) {
            fan.show(0, -this.windmillSize);
        }
        pop();
    }

    update() {
        for (let fan of this.fans) {
            fan.update();
        }
    }

    applyWindForce(windForce) {
        for (let fan of this.fans) {
            fan.applyAngularForce(windForce);
        }
    }

    generateFans(numFans, frictionFactor) {
        this.fans = [];

        let angle = 0;
        for(let i = 0; i < numFans; i++) {
            this.fans.push(new Fan(FAN_SIZE, angle, frictionFactor));
            angle += TWO_PI / numFans;
        }
    }
}