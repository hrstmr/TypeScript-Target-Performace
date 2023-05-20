"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var world = 'world';
// default argument
function hello(who) {
    if (who === void 0) { who = world; }
    return "Hello ".concat(who, "! ");
}
if ((_a = data_1.job.tags) === null || _a === void 0 ? void 0 : _a.export_id) {
}
if ((_c = (_b = data_1.job.tags) === null || _b === void 0 ? void 0 : _b.export_id) === null || _c === void 0 ? void 0 : _c.includes('8848c5d8-fd44-43c0-b7f2-1428d0f4891a')) {
}
