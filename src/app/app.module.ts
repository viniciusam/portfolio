import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { APP_CONFIG, APP_CONFIG_DATA } from './app-config';
import { CustomHttpModule } from './http/custom-http.module';

import { rootRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoadingIndicatorComponent } from './loading.component';

import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  imports: [
    rootRouting,
    BrowserModule,
    CommonModule,
    CustomHttpModule,
    HomeModule,
    BlogModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    LoadingIndicatorComponent
  ],
  providers: [
    // { provide: APP_CONFIG, useValue: APP_CONFIG_DATA }
  ]
})
export class AppModule {

}
