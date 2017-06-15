import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import * as _ from 'underscore';

import { HomeData } from './home-resolve.service';
import { HomeService } from './home.service';
import { Page, Project, Category, Skill } from '../model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  page: Page;
  projectCategories: Category[];
  projects: Project[];
  skillCategories: Category[];
  skills: Skill[];

  constructor(private _homeService: HomeService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRoute.data.forEach((data: { items: HomeData }) => {
        this.page = data.items.page;
        this.projectCategories = data.items.projectCategories;
        this.projects = data.items.projects;
        this.skillCategories = data.items.skillCategories;
        this.skills = data.items.skills;
    });
  }

  getSkills(category: Category): Skill[] {
    return _.filter(this.skills, function (skill) {
      return _.contains(skill['pe/categories/skill'], category.id);
    });
  }

}
