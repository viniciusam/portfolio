import { Rendered } from './rendered';

export class Page {
    id: number;
    slug: string;
    type: string;
    title = new Rendered();
    content = new Rendered();
}
