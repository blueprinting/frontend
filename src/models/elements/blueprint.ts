import { WithChildren } from '../../traits/WithChildren';
import { use } from 'typescript-mix';
import { WithTemplate } from '../../traits/WithTemplate';

export interface Blueprint extends WithChildren, WithTemplate {}

export class Blueprint {
    @use(WithChildren, WithTemplate) this: any;
}
