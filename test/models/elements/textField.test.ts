import { TextField } from "../../../src/models/elements/textField";
import { Parse } from '../../../src';

describe('textField test', () => {
  it('parses from string', () => {
    const parse = Parse.fromInput('{"type":"text-field","label":"label","readonly":false,"disabled":false,"value":"someValue"}');
    expect(parse).toBeDefined();
    expect(parse[0]).toBeDefined();
    expect(parse[0]).toBeInstanceOf(TextField);
    // @ts-ignore
    expect(parse[0].value).toBe('someValue');
    // @ts-ignore
    expect(parse[0].disabled).toBe(false);
    // @ts-ignore
    expect(parse[0].readonly).toBe(false);
    // @ts-ignore
    expect(parse[0].label).toBe('label');
  });
});
