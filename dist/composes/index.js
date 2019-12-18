"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
exports.same = (first) => (second) => first === second;
exports.different = (first) => (second) => first !== second;
exports.greater = (first) => (second) => first > second;
exports.greaterOrEquals = (first) => (second) => first >= second;
exports.lesser = (first) => (second) => first < second;
exports.lesserOrEquals = (first) => (second) => first <= second;
exports.add = (first) => (second) => first + second;
exports.subtract = (first) => (second) => first - second;
exports.multiply = (first) => (second) => first * second;
exports.divide = (first) => (second) => first / second;
exports.modulus = (first) => (exports.lesser(first)(0) ? first * -1 : first);
exports.total = (objects) => (field) => objects.reduce((prev, curr) => field ? (lodash_1.default.isNumber(prev) ? exports.add(prev)(curr[field]) : exports.add(prev[field])(curr[field])) : exports.add(prev)(curr));
//# sourceMappingURL=index.js.map