import { Rendered } from './rendered';

export class Skill {
    id: number;
    slug: string;
    value: number;
    title: Rendered;

    constructor() {
        this.value = 0;
        this.title = new Rendered();
    }
}
