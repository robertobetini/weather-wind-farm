class Windmill {
    constructor(windmillSize, fans) {
        this.windmillSize = windmillSize;
        this.fans = fans;
    }

    show(x, y) {
        translate(x, y);
        line(0, 0, 0, -this.windmillSize);

        for (let fan of this.fans) {
            fan.show(0, -this.windmillSize);
        }
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
}