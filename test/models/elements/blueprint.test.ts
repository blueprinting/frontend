import { Blueprint } from "../../../src/models/elements/blueprint";
import { Parse } from '../../../src';
import { Template } from '../../../src/models/elements/template';

describe('Blueprint test', () => {
  it('parses from string', () => {
    const parse = Parse.fromInput('{"type":"blueprint","template":{"name":"test","params":{"test":"test2"}},"children":[{"type":"text-field"}]}');
    expect(parse).toBeDefined();
    expect(parse[0]).toBeDefined();
    expect(parse[0]).toBeInstanceOf(Blueprint);
    // @ts-ignore
    expect(parse[0].template).toBeInstanceOf(Template);
    // @ts-ignore
    expect(parse[0].template.name).toBe('test');
    // @ts-ignore
    expect(parse[0].template.params.test).toBe('test2');
    // @ts-ignore
    expect(parse[0].children.length).toBe(1);
  });
});
