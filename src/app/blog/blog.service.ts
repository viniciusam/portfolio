import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { APP_CONFIG } from '../app-config';

import { Category, Post, Media } from '../model';

@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    getCategories(): Observable<Category[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + "categories")
            .map(res => res.json());
    }

    getTags(): Observable<Category[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + "tags")
            .map(res => res.json());
    }

    getPosts(filters?): Observable<Post[]> {
        var url = APP_CONFIG.apiBaseUrl + "posts";

        if (filters && filters.categories) {
            url += "?categories=" + filters.categories.join();
        }

        return this.http.get(url)
            .map(res => res.json());
    }

    getPostBySlug(slug): Observable<Post> {
        console.log(APP_CONFIG.apiBaseUrl + "posts?slug=" + slug);
        return this.http.get(APP_CONFIG.apiBaseUrl + "posts?slug=" + slug)
            .map(res => res.json()[0]);
    }

    getMediaById(id): Observable<Media> {
        return this.http.get(APP_CONFIG.apiBaseUrl + "media/" + id)
            .map(ret => { return ret.json()[0] });
    }

}
