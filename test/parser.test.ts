import { Blueprint } from "../src/models/elements/blueprint";
import { Parse } from '../src';
import {Model} from "../src/parser";

const sampleOne = require('./sample/test1.json');

describe("Parser test", () => {
    let result: Model|null = null;

    it("it parses", () => {
        result = Parse.fromInput(sampleOne);
        expect(result).toBeInstanceOf(Blueprint);
    });
});
