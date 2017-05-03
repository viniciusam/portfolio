import { Rendered } from './rendered';

export class Post {
    id: number;
    slug: string;
    type: string;
    date: string;
    modified: string;
    title = new Rendered();
    content = new Rendered();
    excerpt = new Rendered();
}
