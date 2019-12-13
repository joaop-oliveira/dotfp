"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const either_1 = require("../../either");
const right = jest.fn((value) => value);
const left = jest.fn((error) => error);
beforeEach(() => {
    left.mockClear();
    right.mockClear();
});
describe('Either', () => {
    describe('fromNullable', () => {
        it('should call left', () => {
            either_1.Either.fromNullable(null).fold(left, right);
            expect(left).toHaveBeenCalled();
        });
        it('should call right', () => {
            either_1.Either.fromNullable(2).fold(left, right);
            expect(right).toHaveBeenCalled();
        });
        it('should be mappable', () => {
            either_1.Either.fromNullable(2)
                .map((x) => x.toString())
                .fold(left, right);
            expect(right).toHaveBeenCalledWith('2');
        });
    });
    describe('fromEmpty', () => {
        it('should call left', () => {
            either_1.Either.fromEmpty([]).fold(left, right);
            expect(left).toHaveBeenCalled();
        });
        it('should call right', () => {
            either_1.Either.fromEmpty([2]).fold(left, right);
            expect(right).toHaveBeenCalled();
        });
        it('should be mappable', () => {
            either_1.Either.fromEmpty([2])
                .map((x) => x[0].toString())
                .fold(left, right);
            expect(right).toHaveBeenCalledWith('2');
        });
    });
    describe('fromNan', () => {
        it('should call left', () => {
            either_1.Either.fromNan('@!!@#').fold(left, right);
            expect(left).toHaveBeenCalled();
        });
        it('should call right', () => {
            either_1.Either.fromNan('10.50').fold(left, right);
            expect(right).toHaveBeenCalled();
        });
        it('should be mappable', () => {
            either_1.Either.fromNan('10.50')
                .map((x) => x.toFixed(2))
                .fold(left, right);
            expect(right).toHaveBeenCalledWith('10.50');
        });
    });
});
//# sourceMappingURL=index.test.js.map