var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b, _c;
import { d1, d2, d3, d4 } from './data';
var world = 'world';
// default argument
function hello(who) {
    if (who === void 0) { who = world; }
    return "Hello ".concat(who, "! ");
}
if ((_a = d1.tags) === null || _a === void 0 ? void 0 : _a.export_id) {
}
if ((_c = (_b = d1.tags) === null || _b === void 0 ? void 0 : _b.export_id) === null || _c === void 0 ? void 0 : _c.includes('8848c5d8-fd44-43c0-b7f2-1428d0f4891a')) {
}
d2.includes(8888);
var _d3 = __assign({}, d3);
var _d4 = __spreadArray([], d4, true);
var _d5 = d4.find(function (x) { return x === 5; });
var name = 'Harshit';
var message = "Hello ".concat(name);
var str = "\nhello\nworld\n";
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.expand = function (n) {
        return n;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * 2 * this.radius;
    };
    Circle.prototype.expand = function (n) {
        return _super.prototype.expand.call(this, n) * Math.PI;
    };
    Circle.createFromDiameter = function (diameter) {
        return new Circle(diameter / 2);
    };
    return Circle;
}(Shape));
var map = new Map([[1, 2]]);
