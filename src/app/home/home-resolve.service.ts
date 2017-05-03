import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';

import { HomeService } from './home.service';
import { Page, Project, Category, Skill } from '../model';

export interface HomeData {
    page: Page;
    projectCategories: Category[];
    projects: Project[];
    skillCategories: Category[];
    skills: Skill[];
}

@Injectable()
export class HomeResolver implements Resolve<HomeData> {

    private memoryCache: HomeData;

    constructor(private homeService: HomeService) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
    ): Observable<HomeData> {
        if (this.memoryCache)
            return Observable.of(this.memoryCache);

        return Observable.forkJoin(
            this.homeService.getPage('home'),
            this.homeService.getCategories(),
            this.homeService.getProjects(),
            this.homeService.getSkillCategories(),
            this.homeService.getSkills()
        ).map(
            res => {
                this.memoryCache = {
                    page: res[0],
                    projectCategories: res[1],
                    projects: res[2],
                    skillCategories: res[3],
                    skills: res[4],
                }
                return this.memoryCache;
            }
        );
    }

}
