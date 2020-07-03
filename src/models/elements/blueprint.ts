import { Parse } from '../../parser';
import { WithChildren } from '../../traits/WithChildren';
import { trait } from '../../utilities';
import { Template } from './template';

export const Blueprint = trait(WithChildren)(class {
});

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
