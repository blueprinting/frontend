import { Template } from '../models/elements/template';

export class WithTemplate {
    private _template: Template | undefined;

    get template (): Template | undefined {
        return this._template;
    }

    set template (value: Template | undefined) {
        this._template = value;
    }
}
