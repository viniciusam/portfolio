import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectResolver } from './project-resolve.service';
import { HomeResolver } from './home-resolve.service';

import { HomeComponent } from './home.component';
import { ProjectDetailsComponent } from './project-details.component';

export const homeRoutes: Routes = [
  { path: 'me', component: HomeComponent, resolve: { items: HomeResolver } },
  { path: 'projects/:slug', component: ProjectDetailsComponent, resolve: { project: ProjectResolver } }
];

export const homeRoutingProviders: any[] = [];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
