export class HasReadonly {
    private _readonly: boolean | undefined;

    get readonly (): boolean | undefined {
        return this._readonly;
    }

    set readonly (value: boolean | undefined) {
        this._readonly = value;
    }
}
