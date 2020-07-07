export class HasDisabled {
    private _disabled: boolean | undefined;

    get disabled (): boolean | undefined {
        return this._disabled;
    }

    set disabled (value: boolean | undefined) {
        this._disabled = value;
    }
}
