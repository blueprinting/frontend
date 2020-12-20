import { Select } from "../../../src/models/elements/select";
import { Parse } from '../../../src';

describe('textField test', () => {
  it('parses from string, with option group text', () => {
    const parse = Parse.fromInput('{"type":"select","label":"label","readonly":false,"disabled":false,"value":"someValue","optionGroups":[{"text":"Header #1","options":[{"key":"1","value":"2"},{"key":"3","value":"4"}]}]}');
    expect(parse).toBeDefined();
    expect(parse[0]).toBeDefined();
    expect(parse[0]).toBeInstanceOf(Select);
    // @ts-ignore
    expect(parse[0].value).toBe('someValue');
    // @ts-ignore
    expect(parse[0].disabled).toBe(false);
    // @ts-ignore
    expect(parse[0].readonly).toBe(false);
    // @ts-ignore
    expect(parse[0].label).toBe('label');
    // @ts-ignore
    expect(parse[0].optionGroups.length).toBe(1);
    // @ts-ignore
    expect(parse[0].optionGroups[0].text).toBe('Header #1');
    // @ts-ignore
    expect(parse[0].optionGroups[0].options.length).toBe(2);
    // @ts-ignore
    expect(parse[0].optionGroups[0].options[0].key).toBe("1");
    // @ts-ignore
    expect(parse[0].optionGroups[0].options[0].value).toBe("2");
  });

  it('parses from string, without option group text', () => {
    const parse = Parse.fromInput('{"type":"select","label":"label","readonly":false,"disabled":false,"value":"someValue","optionGroups":[{"options":[{"key":"1","value":"2"},{"key":"3","value":"4"}]}]}');
    expect(parse).toBeDefined();
    expect(parse[0]).toBeDefined();
    expect(parse[0]).toBeInstanceOf(Select);
    // @ts-ignore
    expect(parse[0].value).toBe('someValue');
    // @ts-ignore
    expect(parse[0].disabled).toBe(false);
    // @ts-ignore
    expect(parse[0].readonly).toBe(false);
    // @ts-ignore
    expect(parse[0].label).toBe('label');
    // @ts-ignore
    expect(parse[0].optionGroups.length).toBe(1);
    // @ts-ignore
    expect(parse[0].optionGroups[0].text).toBe(undefined);
    // @ts-ignore
    expect(parse[0].optionGroups[0].options.length).toBe(2);
    // @ts-ignore
    expect(parse[0].optionGroups[0].options[0].key).toBe("1");
    // @ts-ignore
    expect(parse[0].optionGroups[0].options[0].value).toBe("2");
  });

  it('parses from string, without option groups', () => {
    const parse = Parse.fromInput('{"type":"select","label":"label","readonly":false,"disabled":false,"value":"someValue"}');
    expect(parse).toBeDefined();
    expect(parse[0]).toBeDefined();
    expect(parse[0]).toBeInstanceOf(Select);
    // @ts-ignore
    expect(parse[0].value).toBe('someValue');
    // @ts-ignore
    expect(parse[0].disabled).toBe(false);
    // @ts-ignore
    expect(parse[0].readonly).toBe(false);
    // @ts-ignore
    expect(parse[0].label).toBe('label');
    // @ts-ignore
    expect(parse[0].optionGroups).toBe(undefined);
  });
});
