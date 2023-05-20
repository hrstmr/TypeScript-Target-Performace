import { d1, d2, d3, d4 } from './data';
const world = 'world';
// default argument
function hello(who = world) {
    return `Hello ${who}! `;
}
if (d1.tags?.export_id) {
}
if (d1.tags?.export_id?.includes('8848c5d8-fd44-43c0-b7f2-1428d0f4891a')) {
}
d2.includes(8888);
const _d3 = { ...d3 };
const _d4 = [...d4];
const _d5 = d4.find((x) => x === 5);
const name = 'Harshit';
const message = `Hello ${name}`;
const str = `
hello
world
`;
class Shape {
    constructor() { }
    expand(n) {
        return n;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * 2 * this.radius;
    }
    expand(n) {
        return super.expand(n) * Math.PI;
    }
    static createFromDiameter(diameter) {
        return new Circle(diameter / 2);
    }
}
