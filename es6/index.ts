import { d1, d2, d3, d4, d5 } from './data';

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

const set = new Set([1, 2, 3]);

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

// 2017

const {
    title: englishTitle, // rename
    translations: [
        {
            title: localeTitle, // rename
        },
    ],
} = d5;
async function foo() {
    const x = await 1;
    return x + 1;
}

// 2018

function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Mail has arrived');
        } else {
            reject(new Error('Failed to arrive'));
        }
    });
}

checkMail()
    .then((mail) => {})
    .catch((err) => {})
    .finally(() => {});

// 2019

const entries = new Map([
    ['foo', 69],
    ['bar', 420],
]);

const obj = Object.fromEntries(entries);
// Expected output: Object { foo: "bar", baz: 42 }

const greeting = '   Hello world!   ';
greeting.trimStart();
greeting.trimEnd();
// Expected output: "Hello world!   ";

const arr1 = [0, 1, 2, [3, 4]];
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

// 2020
const regexp = /t(e)(st(\d?))/g;
const str1 = 'test1test2';

const array = [...str1.matchAll(regexp)];

array[0];
// Expected output: Array ["test1", "e", "st1", "1"]

array[1];
// Expected output: Array ["test2", "e", "st2", "2"]

Promise.allSettled([
    Promise.resolve(33),
    new Promise((resolve) => resolve(66)),
    99,
    Promise.reject(new Error('an error')),
]).then((values) => {});

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
    },
} as any;

const dogName = adventurer.dog?.name;
dogName;
// Expected output: undefined

adventurer.someNonExistentMethod?.();
// Expected output: undefined

const foo1 = null ?? 'default string';

const baz1 = 0 ?? 42;

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

p.replaceAll('dog', 'monkey');
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
p.replaceAll(regex, 'ferret');
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
// Expected output: "quick"

const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// Expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// Expected output: "title is empty"

let a1 = 1;
let b1 = 0;

a1 &&= 2;
console.log(a1);
// Expected output: 2

b1 &&= 2;
console.log(b1);
// Expected output: 0

const a2 = { duration: 50 } as any;

a2.duration ??= 10;
console.log(a2.duration);
// Expected output: 50

a2.speed ??= 25;
console.log(a2.speed);
// Expected output: 25

let fee = 123_00;

class ClassWithPrivate {
    #privateFieldWithInitializer = 42;

    #privateMethod() {}

    static #privateStaticFieldWithInitializer = 42;

    static #privateStaticMethod() {}
}

const cart = ['apple', 'banana', 'pear'];
const last1 = cart.at(1);

const car = { make: 'Honda' as string | undefined, model: 'Accord', year: 1998 };

if ('make2' in car && typeof car.make2 === 'string') {
    car.make2;
}
// Expected output: true

delete car.make;
if ('make' in car === false) {
    car.make = 'Suzuki';
}

console.log(car.make);
// Expected output: "Suzuki"
