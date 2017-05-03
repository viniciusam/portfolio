import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import * as _ from 'underscore';

import { HomeService } from './home.service';
import { Category, Project } from '../model';

@Component({
    selector: 'project-list',
    templateUrl: 'project-list.component.html'
})
export class ProjectListComponent implements OnInit, OnDestroy {

    @Input() categories: Category[];
    @Input() projects: Project[];
    filteredProjects: Project[];
    
    categoryParam: string;

    private _routeSubscription: Subscription;

    constructor(private _activatedRoute: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit() {
        this._routeSubscription = this._activatedRoute.params.subscribe(
            params => {
                this.categoryParam = params['category'];
                if (!this.categoryParam) {
                    this.filteredProjects = this.projects;
                } else {
                    let category = this.getCategoryBySlug(this.categoryParam);
                    this.filteredProjects = this.filterProjectsByCategory(category);
                }
            }
        );
    }

    ngOnDestroy() {
        if (this._routeSubscription)
            this._routeSubscription.unsubscribe();
    }

    getCategoryBySlug(slug: string): Category {
        return _.find(this.categories, function(category) {
            return category.slug == slug;
        });
    }

    filterProjectsByCategory(category: Category): Project[] {
        return _.filter(this.projects, function (project) {
            return _.contains(project["pe/categories/project"], category.id);
        });
    }

    selectCategory(category: Category) {
        this._router.navigate(['/me', { 'category': category.slug }], { replaceUrl: true });
        return false;
    }

}
