var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b, _c, _d, _e, _f, _g;
var _ClassWithPrivate_instances, _h, _ClassWithPrivate_privateFieldWithInitializer, _ClassWithPrivate_privateMethod, _ClassWithPrivate_privateStaticFieldWithInitializer, _ClassWithPrivate_privateStaticMethod;
import { d1, d2, d3, d4, d5 } from './data';
const world = 'world';
if ((_a = d1.tags) === null || _a === void 0 ? void 0 : _a.export_id) {
}
if ((_c = (_b = d1.tags) === null || _b === void 0 ? void 0 : _b.export_id) === null || _c === void 0 ? void 0 : _c.includes('8848c5d8-fd44-43c0-b7f2-1428d0f4891a')) {
}
d2.includes(8888);
const _d3 = Object.assign({}, d3);
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
const map = new Map([[1, 2]]);
const set = new Set([1, 2, 3]);
const [first, last] = ['Nikola', 'Tesla'];
let { title, author } = {
    title: 'The Silkworm',
    author: 'R. Galbraith',
};
const scores = [22, 33];
const [math = 50, sci = 50, arts = 50] = scores;
function greet1({ name = 'Rauno' } = {}) { }
function greet2({ name, greeting }) { }
const { id } = d3, detail = __rest(d3, ["id"]);
function printCoordinates({ left: x, top: y }) { }
const options = Object.assign(Object.assign({}, d3), { visible: true });
const users = [...d2, ...d4, 'rstacruz'];
function hello(who = world) {
    return `Hello ${who}! `;
}
const fatArrow = () => {
    return 1;
};
// 2017
const { title: englishTitle, // rename
translations: [{ title: localeTitle, // rename
 },], } = d5;
function foo() {
    return __awaiter(this, void 0, void 0, function* () {
        const x = yield 1;
        return x + 1;
    });
}
// 2018
function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Mail has arrived');
        }
        else {
            reject(new Error('Failed to arrive'));
        }
    });
}
checkMail()
    .then((mail) => { })
    .catch((err) => { })
    .finally(() => { });
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
]).then((values) => { });
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
    },
};
const dogName = (_d = adventurer.dog) === null || _d === void 0 ? void 0 : _d.name;
dogName;
// Expected output: undefined
(_e = adventurer.someNonExistentMethod) === null || _e === void 0 ? void 0 : _e.call(adventurer);
// Expected output: undefined
const foo1 = null !== null && null !== void 0 ? null : 'default string';
const baz1 = 0 !== null && 0 !== void 0 ? 0 : 42;
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
a.duration || (a.duration = 10);
console.log(a.duration);
// Expected output: 50
a.title || (a.title = 'title is empty.');
console.log(a.title);
// Expected output: "title is empty"
let a1 = 1;
let b1 = 0;
a1 && (a1 = 2);
console.log(a1);
// Expected output: 2
b1 && (b1 = 2);
console.log(b1);
// Expected output: 0
const a2 = { duration: 50 };
(_f = a2.duration) !== null && _f !== void 0 ? _f : (a2.duration = 10);
console.log(a2.duration);
// Expected output: 50
(_g = a2.speed) !== null && _g !== void 0 ? _g : (a2.speed = 25);
console.log(a2.speed);
// Expected output: 25
let fee = 12300;
class ClassWithPrivate {
    constructor() {
        _ClassWithPrivate_instances.add(this);
        _ClassWithPrivate_privateFieldWithInitializer.set(this, 42);
    }
}
_h = ClassWithPrivate, _ClassWithPrivate_privateFieldWithInitializer = new WeakMap(), _ClassWithPrivate_instances = new WeakSet(), _ClassWithPrivate_privateMethod = function _ClassWithPrivate_privateMethod() { }, _ClassWithPrivate_privateStaticMethod = function _ClassWithPrivate_privateStaticMethod() { };
_ClassWithPrivate_privateStaticFieldWithInitializer = { value: 42 };
const cart = ['apple', 'banana', 'pear'];
const last1 = cart.at(1);
const car = { make: 'Honda', model: 'Accord', year: 1998 };
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
