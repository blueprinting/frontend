import { Model } from '../parser';

export class WithChildren {
    private _children: Model[] | undefined;

    get children (): Model[] | undefined {
        return this._children;
    }

    set children (value: Model[] | undefined) {
        this._children = value;
    }
}
