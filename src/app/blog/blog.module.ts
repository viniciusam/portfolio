import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { blogRouting } from './blog.routing';
import { BlogService } from './blog.service';
import { BlogComponent } from './blog.component';
import { PostListComponent } from './post-list.component';
import { PostComponent } from './post.component';

@NgModule({
  imports: [
    blogRouting,
    CommonModule
  ],
  bootstrap: [
    BlogComponent
  ],
  declarations: [
    BlogComponent,
    PostListComponent,
    PostComponent
  ],
  providers: [ BlogService ]
})
export class BlogModule {

}
