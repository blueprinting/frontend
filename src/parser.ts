import { Blueprint } from './models/elements/blueprint';
import { Template } from './models/elements/template';

// @ts-ignore
export type Model = Blueprint | typeof Template;

export type Constructor = (type: string) => Model;

export interface Constructors {
    [key: string]: Constructor;
}

export class Parse {
    private static constructors: Constructors = {};

    /**
     * Register a model constructor.
     *
     * @param type
     * @param constructor
     */
    public static registerConstructor (type: string, constructor: Constructor) {
        this.constructors[type] = constructor;
    }

    /**
     * Parse from data collection.
     *
     * @param data
     */
    public static fromInput (data: any): Model[]|Model|null {
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }

        if (Array.isArray(data)) {
            return this.children(data);
        }

        if (typeof data === 'object') {
            return this.child(data);
        }

        return null;
    }

    /**
     * Construct an array of models from given data array.
     *
     * @param data
     */
    private static children (data: Array<any>): Model[] {
        const children: Model[] = [];

        data.forEach((child) => {
            children.push(this.child(child));
        });

        return children;
    }

    /**
     * Construct a single child model from given data object.
     *
     * @param data
     */
    private static child (data: any): Model {
        if (
            typeof data !== 'object' ||
            !('type' in data) ||
            typeof data.type !== 'string' ||
            !this.constructors[data.type]
        ) {
            throw new Error('Parser error - unrecognized child.');
        }

        return this.constructors[data.type](data);
    }
}
