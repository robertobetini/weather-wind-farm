class Fan {
    constructor(fanSize, angle, frictionFactor) {
        this.size = fanSize;
        this.angle = angle;
        this.angularSpeed = 0;
        this.angularAcceleration = 0;
        this.frictionFactor = frictionFactor;
    }

    show(x, y) {
        push();
        translate(x, y);
        rotate(this.angle);
        line(0, 0, 0, this.size);
        pop();
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