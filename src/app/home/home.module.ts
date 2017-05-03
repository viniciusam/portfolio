import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from '../gallery/gallery.module';

import { homeRouting } from './home.routing';
import { HomeService } from './home.service';
import { ProjectResolver } from './project-resolve.service';
import { HomeResolver } from './home-resolve.service';

import { PageFragmentComponent } from './page-fragment.component';
import { ProgressBarComponent } from './progress-bar.component';
import { AlertComponent } from './alert.component';

import { HomeComponent } from './home.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectDetailsComponent } from './project-details.component';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    homeRouting,
    CommonModule,
    ReactiveFormsModule,
    GalleryModule
  ],
  bootstrap: [
    HomeComponent
  ],
  declarations: [
    PageFragmentComponent,
    ProgressBarComponent,
    AlertComponent,
    HomeComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ContactComponent
  ],
  providers: [
    HomeService,
    ProjectResolver,
    HomeResolver
  ]
})
export class HomeModule {

}
