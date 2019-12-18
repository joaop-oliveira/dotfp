"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composes_1 = require("../../composes");
describe('same', () => {
    it('must return true', () => {
        const isSame = composes_1.same(1)(1);
        expect(isSame).toBeTruthy();
    });
    it('must return false', () => {
        const isSame = composes_1.same(1)(2);
        expect(isSame).toBeFalsy();
    });
});
describe('different', () => {
    it('must return true', () => {
        const isDifferent = composes_1.different(1)(2);
        expect(isDifferent).toBeTruthy();
    });
    it('must return false', () => {
        const isDifferent = composes_1.different(1)(1);
        expect(isDifferent).toBeFalsy();
    });
});
describe('greater', () => {
    it('must return true', () => {
        const isGreater = composes_1.greater(2)(1);
        expect(isGreater).toBeTruthy();
    });
    it('must return false', () => {
        const isGreater = composes_1.greater(1)(1);
        expect(isGreater).toBeFalsy();
    });
});
describe('greaterOrEquals', () => {
    it('must return true', () => {
        const isGreater = composes_1.greaterOrEquals(2)(1);
        const isEquals = composes_1.greaterOrEquals(1)(1);
        expect(isGreater).toBeTruthy();
        expect(isEquals).toBeTruthy();
    });
    it('must return false', () => {
        const isGreater = composes_1.greaterOrEquals(1)(2);
        expect(isGreater).toBeFalsy();
    });
});
describe('lesser', () => {
    it('must return true', () => {
        const isLesser = composes_1.lesser(1)(2);
        expect(isLesser).toBeTruthy();
    });
    it('must return false', () => {
        const isLesser = composes_1.lesser(2)(1);
        expect(isLesser).toBeFalsy();
    });
});
describe('lesserOrEquals', () => {
    it('must return true', () => {
        const isLesser = composes_1.lesserOrEquals(1)(2);
        const isEquals = composes_1.lesserOrEquals(1)(1);
        expect(isLesser).toBeTruthy();
        expect(isEquals).toBeTruthy();
    });
    it('must return false', () => {
        const isLesser = composes_1.lesserOrEquals(2)(1);
        expect(isLesser).toBeFalsy();
    });
});
describe('add', () => {
    it('must return number', () => {
        const equals = composes_1.add(2)(2);
        expect(equals).toBe(4);
    });
});
describe('subtract', () => {
    it('must return number', () => {
        const equals = composes_1.subtract(2)(2);
        expect(equals).toBe(0);
    });
});
describe('multiply', () => {
    it('must return number', () => {
        const equals = composes_1.multiply(2)(2);
        expect(equals).toBe(4);
    });
});
describe('divide', () => {
    it('must return number', () => {
        const equals = composes_1.divide(2)(2);
        expect(equals).toBe(1);
    });
});
describe('modulus', () => {
    it('must return number', () => {
        const negative = composes_1.modulus(-2);
        const positive = composes_1.modulus(2);
        expect(negative).toBe(2);
        expect(positive).toBe(2);
    });
});
describe('total', () => {
    it('must return the total from an array of objects', () => {
        const values = [{ value: 2 }, { value: 2 }, { value: 2 }, { value: 2 }];
        const eight = composes_1.total(values)('value');
        expect(eight).toBe(8);
    });
    it('must return the total from an array', () => {
        const values = [2, 2, 2, 2];
        const eight = composes_1.total(values)();
        expect(eight).toBe(8);
    });
});
//# sourceMappingURL=index.test.js.map