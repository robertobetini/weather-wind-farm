class Fan {
    constructor(fanSize, angle, frictionFactor) {
        this.size = fanSize;
        this.angle = angle;
        this.angularSpeed = 0;
        this.angularAcceleration = 0;
        this.frictionFactor = frictionFactor;
    }

    show(x, y, graphics) {
        graphics.push();
        graphics.translate(x, y);
        graphics.rotate(this.angle);
        graphics.line(0, 0, 0, this.size);
        graphics.pop();
    }

    update() {
        this.angularSpeed += this.angularAcceleration;
        this.angle += this.angularSpeed;

        this.angularAcceleration = 0;

        this.angularSpeed *= this.frictionFactor;
    }

    applyAngularForce(angularForce) {
        this.angularAcceleration += angularForce;
    }
}