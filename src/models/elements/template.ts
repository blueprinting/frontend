export interface TemplateParams {
    [key: string]: string|number|boolean|null;
}

export class Template {
    private readonly _name: string;
    private readonly _params: TemplateParams | undefined;

    constructor(name: string, params?: TemplateParams) {
        this._name = name;

        if (typeof params !== 'undefined') {
            this._params = params;
        }
    }

    get name () {
        return this._name;
    }

    get params () {
        return this._params;
    }
}
