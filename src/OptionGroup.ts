type Options = {
  [key in string | number]: string | number;
};

export class OptionGroup {
  private _text: string | undefined;
  private _options: Options | undefined;

  constructor(options: Options, text?: string) {
    this.options = options;

    if (typeof text !== 'undefined') {
      this.text = text;
    }
  }

  set options (options: Options | undefined) {
    this._options = options;
  }

  set text (text: string | undefined) {
    this._text = text;
  }

  get options(): Options | undefined {
    return this._options;
  }

  get text(): string | undefined {
    return this._text;
  }
}
