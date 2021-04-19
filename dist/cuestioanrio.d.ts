declare type ColorType = 'red' | 'yellow' | 'blue' | 'green';
declare abstract class TwoDimensionalFigureCreator {
    abstract factoryMethod(): TwoDimensionalFigure;
    logic(): string;
}
declare class RectangleCreator extends TwoDimensionalFigureCreator {
    private readonly name;
    private color;
    private base;
    private height;
    constructor(name: string, color: ColorType, base: number, height: number);
    factoryMethod(): TwoDimensionalFigure;
}
declare class CircleCreator extends TwoDimensionalFigureCreator {
    private readonly name;
    private color;
    private radius;
    constructor(name: string, color: ColorType, radius: number);
    factoryMethod(): TwoDimensionalFigure;
}
interface TwoDimensionalFigure {
    getArea(): number;
}
declare class Rectangle implements TwoDimensionalFigure {
    private readonly name;
    private color;
    private base;
    private height;
    private readonly sides;
    constructor(name: string, color: ColorType, base?: number, height?: number);
    getSides(): number;
    getName(): string;
    getColor(): ColorType;
    getArea(): number;
}
declare class Circle implements TwoDimensionalFigure {
    private readonly name;
    private color;
    private radius;
    constructor(name: string, color: ColorType, radius?: number);
    getName(): string;
    getColor(): ColorType;
    getArea(): number;
}
declare function clientCode(twoDimensionalFigureCreator: TwoDimensionalFigureCreator): void;
