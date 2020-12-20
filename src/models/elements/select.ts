import { use } from 'typescript-mix';
import { HasLabel } from '../../traits/HasLabel';
import { HasReadonly } from '../../traits/HasReadonly';
import { HasDisabled } from '../../traits/HasDisabled';
import { HasOptionGroups } from '../../traits/HasOptionGroups';

export interface Select extends HasLabel, HasReadonly, HasDisabled, HasOptionGroups {}

export class Select {
    @use(HasLabel, HasReadonly, HasDisabled, HasOptionGroups) this: any;

    private _value: string | undefined;

    get value (): string | undefined {
        return this._value;
    }

    set value (value: string | undefined) {
        this._value = value;
    }
}
