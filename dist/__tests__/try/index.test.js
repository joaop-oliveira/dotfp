"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const try_1 = require("../../try");
const debug_1 = require("../../debug");
const lodash_1 = __importDefault(require("lodash"));
const right = jest.fn((value) => value);
const left = jest.fn((error) => error);
const hugeData = lodash_1.default.range(100000).map((number) => ({
    square: number * number,
    even: number % 2 === 0,
    double: number * 2,
    triple: number * 3,
}));
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
describe('copmpress', () => {
    it('should compress huge object', async () => {
        const compressed = await try_1.Try.gzip(hugeData);
        compressed.fold(left, right);
        expect(right).toHaveBeenCalled();
    });
    it('should gunzip huge buffer', async () => {
        const compressed = await try_1.Try.gzip(hugeData);
        const buff = compressed.chain((buff) => buff);
        const uncompressed = await try_1.Try.gunzip(buff);
        uncompressed.fold(left, right);
        expect(right).toHaveBeenCalled();
    });
});
//# sourceMappingURL=index.test.js.map