"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Left {
    constructor(value) {
        this.value = value;
    }
    static from(value) {
        return new Left(value);
    }
    map(func) {
        return new Left(this.value);
    }
    chain(func) {
        return new Left(this.value);
    }
    fold(left, right) {
        return left(this.value);
    }
    get toString() {
        return `Left(${this.value})`;
    }
}
exports.Left = Left;
//# sourceMappingURL=index.js.map