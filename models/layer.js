class Layer {
    constructor(floorEquation) {
        this.graphics = createGraphics(width, height);
        this.windmills = [];
        this.floor = [];
        for (let x = 0; x < width; x++) {
            this.floor[x] = floorEquation(x);
        }
    }

    draw() {
        this.graphics.clear();
        this.showFloor();
        this.showWindmills();
        return this.graphics;
    }

    showFloor() {
        push();
        fill(75, 255, 120);
        beginShape();
        for (let x = 0; x < width; x++) {
            let y = this.floor[x];
            this.graphics.vertex(x, y);
        }

        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);
        pop();
    }

    showWindmills() {
        let xOffset = Math.floor(width / (this.windmills.length + 1));
        for (let i = 0; i < this.windmills.length; i++) {
            let x = xOffset * (i + 1);
            let y = this.floor[x];
            this.windmills[i].show(x, y, this.graphics);
        }
    }

    update() {
        for (let windmill of this.windmills) {
            windmill.update();
        }
    }

    applyWindForce(windForce) {
        for (let windmill of this.windmills) {
            windmill.applyWindForce(windForce);
        }
    }

    attach(windmill) {
        this.windmills.push(windmill);
    }
}