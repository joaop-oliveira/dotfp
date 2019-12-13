"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const left_1 = require("../either/left");
const right_1 = require("../either/right");
const either_1 = require("../either");
class Try {
    static catch(func) {
        try {
            return right_1.Right.from(func());
        }
        catch (error) {
            return left_1.Left.from(error);
        }
    }
    static parseNumber(value) {
        return either_1.Either.fromNan(value.replace(',', '.'));
    }
}
exports.Try = Try;
//# sourceMappingURL=index.js.map