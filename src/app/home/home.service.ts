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
        return this.http.get(APP_CONFIG.apiBaseUrl + "pages?slug=" + slug)
            .map(ret => { return ret.json()[0] });
    }

    getSkillCategories(): Observable<Category[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + "pe/categories/skill?per_page=99&orderby=name")
            .map(ret => { return ret.json() });
    }

    getSkills(): Observable<Skill[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + "pe/skills?per_page=99&orderby=title&order=asc")
            .map(ret => { return ret.json() });
    }

    getProjects(): Observable<Project[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + "pe/projects")
            .map(res => res.json());
    }

    getProjectBySlug(slug: string): Observable<Project> {
        return this.http.get(APP_CONFIG.apiBaseUrl + "pe/projects?slug=" + slug)
            .map(res => res.json()[0]);
    }

    getCategories(): Observable<Category[]> {
        return this.http.get(APP_CONFIG.apiBaseUrl + "pe/categories/project")
            .map(res => res.json());
    }

    getMedia(ids: number[]): Observable<Media[]> {
        if (!ids)
            return Observable.empty();
        
        let filter = ids.join(",");
        return this.http.get(APP_CONFIG.apiBaseUrl + "media?include=" + filter)
            .map(res => res.json());
    }

    sendMail(data: Object): Observable<Response> {
        let body = new URLSearchParams();
        body.append("name", data['name']);
        body.append("email", data['email']);
        body.append("message", data['message']);

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(APP_CONFIG.apiBaseUrl + "pe/mail", body, options);
            //.catch(this.handleError);
    }

}
