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
        for (let x = 0; x < width; x++) {
            let y = this.floor[x];
            this.graphics.point(x, y);
        }
    }

    showWindmills() {
        let xOffset = width / (this.windmills.length + 1);
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