import { Parse } from '../../parser';
import { WithChildren } from '../../traits/WithChildren';
import { Template } from './template';
import { use } from 'typescript-mix';

export interface Blueprint extends WithChildren {
}

export class Blueprint {
    @use(WithChildren) this: any;
}

Parse.registerConstructor('blueprint', (data: any) => {
    const blueprint = new Blueprint();

    if (
        typeof data.template !== 'undefined' &&
        'name' in data.template &&
        typeof data.template.name === 'string'
    ) {
        const template = new Template(data.template.name, data.template.params);
    }

    return blueprint;
});
