import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { PostListComponent } from './post-list.component';
import { PostComponent } from './post.component';

export const blogRoutes: Routes = [
  { path: 'blog', component: BlogComponent, children: [
      { path: '', component: PostListComponent },
      { path: 'category/:category', component: PostListComponent },
      { path: 'tag/:tag', component: PostListComponent },
      { path: 'post/:slug', component: PostComponent }
    ]
  }
];

export const blogRoutingProviders: any[] = [];

export const blogRouting: ModuleWithProviders = RouterModule.forChild(blogRoutes);
