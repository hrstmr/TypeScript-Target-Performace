"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const data_1 = require("./data");
const world = 'world';
function hello(who = world) {
    data_1.data.abc = 'sdgbsd';
    return `Hello ${who}! `;
}
exports.hello = hello;
