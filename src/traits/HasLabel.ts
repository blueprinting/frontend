export class HasLabel {
    private _label: string | undefined;

    get label (): string | undefined {
        return this._label;
    }

    set label (value: string | undefined) {
        this._label = value;
    }
}
