"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const left_1 = require("./left");
const right_1 = require("./right");
const lodash_1 = require("lodash");
class Either {
    static fromNullable(value) {
        return lodash_1.isNull(value) ? left_1.Left.from('nao e possivel computar um valor nullo') : right_1.Right.from(value);
    }
    static fromEmpty(value) {
        return lodash_1.isEmpty(value) ? left_1.Left.from('Array ou Objeto nao podem ser vazios') : right_1.Right.from(value);
    }
    static fromNan(value) {
        return Either.fromNullable(value)
            .map((str) => Number(str))
            .chain((num) => (lodash_1.isNaN(num) ? left_1.Left.from(`Valor ${value} nao e um numero`) : right_1.Right.from(num)));
    }
}
exports.Either = Either;
//# sourceMappingURL=index.js.map