import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/subscription';

import { BlogService } from './blog.service';
import { Post } from '../model';

@Component({
  selector: 'posts',
  templateUrl: './post-list.component.html' 
})
export class PostListComponent implements OnInit, OnDestroy {

  private _routeSubscription: Subscription;
  posts: Post[];

  constructor(private _blogService: BlogService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._routeSubscription = this._activatedRoute.params.subscribe(
      params => {
        var filters = null;
        var category = params['category'];

        if (category)
          filters = { categories: [ category ] };
        
        this.loadPosts(filters);
      }
    )
  }

  ngOnDestroy() {
    this._routeSubscription.unsubscribe();
  }

  loadPosts(filters) {
    this._blogService.getPosts(filters).subscribe(
      res => { this.posts = res; }
    );
  }

}
