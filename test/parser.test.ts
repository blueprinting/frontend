import { Blueprint } from "../src/models/elements/blueprint";
import { Parse } from '../src';

const sampleOne = require('./sample/test1.json');

describe("Parser test", () => {

    it("it parses", () => {
        expect(Parse.fromInput(sampleOne)).toBeInstanceOf(Blueprint);
    });
});
