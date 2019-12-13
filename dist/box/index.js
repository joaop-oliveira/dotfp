"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor(value) {
        this.value = value;
    }
    static from(value) {
        return new Box(value);
    }
    map(func) {
        return new Box(func(this.value));
    }
    chain(func) {
        return func(this.value);
    }
    fold(func) {
        return func(this.value);
    }
    get toString() {
        return `Box(${this.value})`;
    }
}
exports.Box = Box;
//# sourceMappingURL=index.js.map