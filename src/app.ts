import { Config as _Config } from './IConfig';

export class App {

    //private status;
    private status: string;

    private name: string = 'Special App';

    private version: number = 1.1;

    private active: boolean = false;

    constructor() {
        this.status = 'initiated';
        this.active = true;
    }

    get state(): string {

        return this.status;

    }

    get config(): _Config {

        return {
            env: process.env.ENV,
            name: this.name,
            settings: {
                version: this.version,
                active: this.active
            }
        };
    }

}

export const app: App = new App();

// Functions
/**
 *
 * Options
 * @desc example of optional params
 *
 */
function options(a: number, b?: number, c?: number): number {
    return a;
}

/**
 *
 * String Literal examples
 *
 */

let foo: 'Hello';
//foo = 'Goodbye';

type CardinalDirection =
    "North"
    | "East"
    | "South"
    | "West";

function move(distance: number, direction: CardinalDirection): void {
    // ...
}

//move(1, 'North');
//move(1, 'Nurth');
