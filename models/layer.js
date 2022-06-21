class Layer {
    constructor(floorEquation) {
        this.windmills = [];
        this.floor = [];
        for (let x = 0; x < width; x++) {
            this.floor[x] = floorEquation(x);
        }
    }

    show() {
        this.showFloor();
        this.showWindmills();
    }

    showFloor() {
        for (let x = 0; x < width; x++) {
            let y = this.floor[x];
            point(x, y);
        }
    }

    showWindmills() {
        let xOffset = width / (this.windmills.length + 1);
        for (let i = 0; i < this.windmills.length; i++) {
            let x = xOffset * (i + 1);
            let y = this.floor[x];
            this.windmills[i].show(x, y);
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