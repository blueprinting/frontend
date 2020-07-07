import { Parse } from '../../parser';
import { use } from 'typescript-mix';
import { HasLabel } from '../../traits/HasLabel';
import { HasReadonly } from '../../traits/HasReadonly';
import { HasDisabled } from '../../traits/HasDisabled';

export interface TextField extends HasLabel, HasReadonly, HasDisabled {}

export class TextField {
    @use(HasLabel, HasReadonly, HasDisabled) this: any;

    private _value: string | undefined;

    get value (): string | undefined {
        return this._value;
    }

    set value (value: string | undefined) {
        this._value = value;
    }
}

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
