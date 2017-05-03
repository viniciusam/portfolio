import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HomeService } from './home.service';
import { Project } from '../model';

@Injectable()
export class ProjectResolver implements Resolve<Project> {
  
  constructor(private _homeService: HomeService) {}

  resolve( route: ActivatedRouteSnapshot,
           state: RouterStateSnapshot ): Observable<Project> {
      return this._homeService.getProjectBySlug(route.params['slug']);
  }

}
