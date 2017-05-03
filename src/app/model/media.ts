import { Rendered } from './rendered';

export class Media {
    id: number;
    slug: string;
    type: string;
    guid = new Rendered();
    title = new Rendered();
    source_url: string;
    caption = new Rendered();
}
