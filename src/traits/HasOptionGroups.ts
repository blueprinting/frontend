import { OptionGroup } from '../OptionGroup';

export class HasOptionGroups {
  private _optionGroups: OptionGroup[] | undefined;

  get optionGroups (): OptionGroup[] | undefined {
    return this._optionGroups;
  }

  set optionGroups (value: OptionGroup[] | undefined) {
    this._optionGroups = value;
  }
}
