import { Blueprint } from './models/elements/blueprint';
import { Template } from './models/elements/template';
import { TextField } from './models/elements/textField';
import { Select } from './models/elements/select';
import { OptionGroup } from './OptionGroup';

export type Model = Blueprint | Template | TextField | Select;

export type Constructor = (type: string) => Model;

export interface Constructors {
  [key: string]: Constructor;
}

export class Parse {
  private static constructors: Constructors = {};

  /**
   * Register a model constructor.
   *
   * @param type
   * @param constructor
   */
  public static registerConstructor (type: string, constructor: Constructor): void {
    this.constructors[type] = constructor;
  }

  /**
   * Parse from data collection.
   *
   * @param data
   */
  public static fromInput (data: any): Model[] {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    return this.children(Array.isArray(data) ? data : [data]);
  }

  /**
   * Construct an array of models from given data array.
   *
   * @param data
   */
  private static children (data: Array<any>): Model[] {
    const children: Model[] = [];

    data.forEach((child) => {
      children.push(this.child(child));
    });

    return children;
  }

  /**
   * Construct a single child model from given data object.
   *
   * @param data
   */
  private static child (data: any): Model {
    if (
      typeof data !== 'object' ||
      !('type' in data) ||
      typeof data.type !== 'string' ||
      !this.constructors[data.type]
    ) {
      throw new Error('Parser error - unrecognized child.');
    }

    return this.constructors[data.type](data);
  }
}

Parse.registerConstructor('blueprint', (data: any) => {
  const blueprint = new Blueprint();

  if (
    typeof data.template !== 'undefined' &&
    'name' in data.template &&
    typeof data.template.name === 'string'
  ) {
    blueprint.template = new Template(data.template.name, data.template.params);
  }

  if (
    typeof data.children !== 'undefined' &&
    data.children.length > 0
  ) {
    blueprint.children = Parse.fromInput(data.children);
  }

  return blueprint;
});

Parse.registerConstructor('text-field', (data: any) => {
  const textField = new TextField();

  if (
    'label' in data &&
    typeof data.label === 'string'
  ) {
    textField.label = data.label;
  }

  if (
    'readonly' in data &&
    typeof data.readonly === 'boolean'
  ) {
    textField.readonly = data.readonly;
  }

  if (
    'disabled' in data &&
    typeof data.disabled === 'boolean'
  ) {
    textField.disabled = data.disabled;
  }

  if (
    'value' in data &&
    typeof data.value === 'string'
  ) {
    textField.value = data.value;
  }

  return textField;
});

Parse.registerConstructor('select', (data: any) => {
  const select = new Select();

  if (
    'label' in data &&
    typeof data.label === 'string'
  ) {
    select.label = data.label;
  }

  if (
    'readonly' in data &&
    typeof data.readonly === 'boolean'
  ) {
    select.readonly = data.readonly;
  }

  if (
    'disabled' in data &&
    typeof data.disabled === 'boolean'
  ) {
    select.disabled = data.disabled;
  }

  if (
    'value' in data &&
    typeof data.value === 'string'
  ) {
    select.value = data.value;
  }

  if (
    'optionGroups' in data &&
    Array.isArray(data.optionGroups)
  ) {
    select.optionGroups = data.optionGroups.map((group: any) => {
      if (typeof group.options === 'undefined') {
        return null;
      }

      return new OptionGroup(group.options, group.text);
    }).filter((group: OptionGroup|null) => group !== null);
  }

  return select;
});
