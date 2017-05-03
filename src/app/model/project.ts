import { Rendered } from './rendered';

export class Project {
    id: number;
    slug: string;
    featured_media: number;
    short_description: string;
    url: string;
    gallery: number[];
    title = new Rendered();
    content = new Rendered();
}
