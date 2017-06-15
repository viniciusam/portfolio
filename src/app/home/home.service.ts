import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';

import { APP_CONFIG } from '../app-config';

import { Page , Category, Skill, Project, Media } from '../model';

@Injectable()
export class HomeService {

    constructor(private http: Http) { }

    getPage(slug): Observable<Page> {
        return this.http.get(APP_CONFIG.apiBaseUrl + 'pages?slug=' + slug)
            .map(ret => ret.json()[0]);
    }

    getSkillCategories(): Observable<Category[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + 'pe/categories/skill?per_page=99&orderby=name')
            .map(ret => ret.json());
    }

    getSkills(): Observable<Skill[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + 'pe/skills?per_page=99&orderby=title&order=asc')
            .map(ret => ret.json());
    }

    getProjects(): Observable<Project[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + 'pe/projects')
            .map(res => res.json());
    }

    getProjectBySlug(slug: string): Observable<Project> {
        return this.http.get(APP_CONFIG.apiBaseUrl + 'pe/projects?slug=' + slug)
            .map(res => res.json()[0]);
    }

    getCategories(): Observable<Category[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + 'pe/categories/project')
            .map(res => res.json());
    }

    getMedia(ids: number[]): Observable<Media[]> {
        if (!ids) {
            return Observable.empty();
        }

        const filter = ids.join(',');
        return this.http.get(APP_CONFIG.apiBaseUrl + 'media?include=' + filter)
            .map(res => res.json());
    }

    sendMail(data: Object): Observable<Response> {
        const body = new URLSearchParams();
        body.append('name', data['name']);
        body.append('email', data['email']);
        body.append('message', data['message']);

        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(APP_CONFIG.apiBaseUrl + 'pe/mail', body, options);
            // .catch(this.handleError);
    }

}
