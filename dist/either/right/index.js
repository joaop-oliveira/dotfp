"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Right {
    constructor(value) {
        this.value = value;
    }
    static from(value) {
        return new Right(value);
    }
    map(func) {
        return new Right(func(this.value));
    }
    chain(func) {
        return func(this.value);
    }
    fold(left, right) {
        return right(this.value);
    }
    get toString() {
        return `Right(${this.value})`;
    }
}
exports.Right = Right;
//# sourceMappingURL=index.js.map