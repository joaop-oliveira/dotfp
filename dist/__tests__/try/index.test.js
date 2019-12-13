"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const try_1 = require("../../try");
const debug_1 = require("../../debug");
const prom = () => new Promise((res, rej) => {
    setTimeout(() => {
        res('Im late');
    }, 1000);
});
const right = jest.fn((value) => value);
const left = jest.fn((error) => error);
beforeEach(() => {
    left.mockClear();
    right.mockClear();
});
describe('Try', () => {
    describe('catch', () => {
        it('should call Right', () => {
            try_1.Try.catch(() => 'hello').fold(left, right);
            expect(right).toHaveBeenCalled();
        });
        it('should call Left', () => {
            try_1.Try.catch(() => {
                throw new Error('Ooops');
            }).fold(left, right);
            expect(left).toHaveBeenCalled();
        });
    });
    describe('parseNumber', () => {
        it('should call Right', () => {
            try_1.Try.parseNumber('10,50').fold(left, right);
            expect(right).toHaveBeenCalled();
        });
        it('should call Left', () => {
            try_1.Try.parseNumber('@#$$%')
                .map(debug_1.logIt)
                .fold(left, right);
            expect(left).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=index.test.js.map