"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const box_1 = require("../../box");
describe('Box', () => {
    it('should map an number', () => {
        const box = box_1.Box.from(2).map((x) => x + 2);
        expect(box.toString).toBe('Box(4)');
    });
    it('should chain a string', () => {
        const box = box_1.Box.from('hello').chain((hello) => hello + ' world');
        expect(box).toBe('hello world');
    });
    it('should fold a string', () => {
        const box = box_1.Box.from('hello').fold((hello) => hello + ' world');
        expect(box).toBe('hello world');
    });
});
//# sourceMappingURL=index.test.js.map