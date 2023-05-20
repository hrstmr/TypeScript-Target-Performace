import { d1, d2, d3, d4 } from './data';

const world = 'world';

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
    constructor() {}
    expand(n: number) {
        return n;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * 2 * this.radius;
    }

    expand(n: number) {
        return super.expand(n) * Math.PI;
    }

    static createFromDiameter(diameter: number) {
        return new Circle(diameter / 2);
    }
}

const map = new Map([[1, 2]]);

const [first, last] = ['Nikola', 'Tesla'];
let { title, author } = {
    title: 'The Silkworm',
    author: 'R. Galbraith',
};
const scores = [22, 33];
const [math = 50, sci = 50, arts = 50] = scores;
function greet1({ name = 'Rauno' } = {}) {}
function greet2({ name, greeting }: { name: string; greeting: string }) {}

const { id, ...detail } = d3;
function printCoordinates({ left: x, top: y }: { left: string; top: string }) {}
const options = {
    ...d3,
    visible: true,
};
const users = [...d2, ...d4, 'rstacruz'];

function hello(who: string = world): string {
    return `Hello ${who}! `;
}

const fatArrow = () => {
    return 1;
};
