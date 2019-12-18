"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zlib_1 = __importDefault(require("zlib"));
const left_1 = require("../either/left");
const right_1 = require("../either/right");
const either_1 = require("../either");
async function compress(value) {
    return new Promise((resolve, reject) => {
        zlib_1.default.gzip(value, (error, buffer) => {
            if (error)
                reject(error);
            resolve(buffer);
        });
    });
}
async function uncompress(value) {
    return new Promise((resolve, reject) => {
        zlib_1.default.gunzip(value, (error, data) => {
            if (error)
                reject(error);
            resolve(data.toString());
        });
    });
}
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
    static gzip(value) {
        const stringify = JSON.stringify(value);
        return compress(stringify)
            .then((buffer) => right_1.Right.from(buffer))
            .catch((error) => left_1.Left.from(''));
    }
    static gunzip(value) {
        return uncompress(value)
            .then((data) => right_1.Right.from(data))
            .catch((err) => left_1.Left.from(err));
    }
}
exports.Try = Try;
//# sourceMappingURL=index.js.map