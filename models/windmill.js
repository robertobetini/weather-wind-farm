class Windmill {
    constructor(windmillSize, numFans, fanSize, frictionFactor = 0.995) {
        this.windmillSize = windmillSize;
        this.fanSize = fanSize;
        this.generateFans(numFans, frictionFactor);
    }

    show(x, y, graphics) {
        graphics.push();
        graphics.translate(x, y);
        graphics.line(0, 0, 0, -this.windmillSize);

        for (let fan of this.fans) {
            fan.show(0, -this.windmillSize, graphics);
        }
        graphics.pop();
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
            this.fans.push(new Fan(this.fanSize, angle, frictionFactor));
            angle += TWO_PI / numFans;
        }
    }
}