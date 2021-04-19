class TwoDimensionalFigureCreator {
    logic() {
        const twoDimensionalFigure = this.factoryMethod();
        return `I am a ${twoDimensionalFigure.getName()}, ` +
            `I am ${twoDimensionalFigure.getColor()} and ` +
            `my area is equal to ${twoDimensionalFigure.getArea()}`;
    }
}
class RectangleCreator extends TwoDimensionalFigureCreator {
    constructor(name, color, base, height) {
        super();
        this.name = name;
        this.color = color;
        this.base = base;
        this.height = height;
    }
    factoryMethod() {
        return new Rectangle(this.name, this.color, this.base, this.height);
    }
}
class CircleCreator extends TwoDimensionalFigureCreator {
    constructor(name, color, radius) {
        super();
        this.name = name;
        this.color = color;
        this.radius = radius;
    }
    factoryMethod() {
        return new Circle(this.name, this.color, this.radius);
    }
}
class Rectangle {
    constructor(name, color, base = 1, height = 1) {
        this.name = name;
        this.color = color;
        this.base = base;
        this.height = height;
        this.sides = 4;
    }
    getSides() {
        return this.sides;
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
    getArea() {
        return this.base * this.height;
    }
}
class Circle {
    constructor(name, color, radius = 1) {
        this.name = name;
        this.color = color;
        this.radius = radius;
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
function clientCode(twoDimensionalFigureCreator) {
    console.log(twoDimensionalFigureCreator.logic());
}
clientCode(new RectangleCreator('RedRectangle', 'red', 10, 5));
clientCode(new CircleCreator('BlueCircle', 'blue', 7));
//# sourceMappingURL=cuestioanrio.js.map