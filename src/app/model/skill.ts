import { Rendered } from './rendered';

export class Skill {
    id: number;
    slug: string;
    value: number = 0;
    title = new Rendered();
}