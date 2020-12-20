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
