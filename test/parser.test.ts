import { Blueprint } from "../src/models/elements/blueprint";
import { Parse } from '../src';
import { Template } from '../src/models/elements/template';

describe('Parser test', () => {
    it('it parses from string', () => {
        const parse = Parse.fromInput('{"type":"blueprint","template":{"name":"test","params":{"test":"test2"}}}');
        expect(parse).toBeDefined();
        expect(parse[0]).toBeDefined();
        expect(parse[0]).toBeInstanceOf(Blueprint);

        if (parse[0] instanceof Blueprint) {
            expect(parse[0].template).toBeInstanceOf(Template);
        }
    });

    it('it doesnt parse', () => {
        expect(() => {
            Parse.fromInput('[{"type":"test"}]');
        }).toThrowError('Parser error - unrecognized child.');

        expect(() => {
            Parse.fromInput(0);
        }).toThrowError('Parser error - unrecognized child.');
    });
});
