import { Blueprint } from "../src/models/elements/blueprint";
import { Parse } from '../src';

const sampleOne = require('./sample/test1.json');

describe('Parser test', () => {
    it('it parses from onject', () => {
        expect(Parse.fromInput(sampleOne)).toBeInstanceOf(Blueprint);
    });

    it('it parses from string', () => {
        expect(Parse.fromInput('{"type":"blueprint"}')).toBeInstanceOf(Blueprint);
    });

    it('it parses from string', () => {
        const parse = Parse.fromInput('[{"type":"blueprint"}]');
        expect(parse).toBeDefined();
        expect(parse[0]).toBeDefined();
        expect(parse[0]).toBeInstanceOf(Blueprint);
    });

    it('it doesnt parse', () => {
        expect(() => {
            Parse.fromInput('[{}]');
        }).toThrowError('Parser error - unrecognized child.');

        expect(Parse.fromInput(0)).toBeNull();
    });
});
