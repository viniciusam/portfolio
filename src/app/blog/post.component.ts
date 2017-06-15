import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BlogService } from './blog.service';
import { Post } from '../model';

@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private _blogService: BlogService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        const slug = params['slug'];
        if (!slug) return;
        this.loadPost(slug);
      }
    )
  }

  loadPost(slug) {
    this._blogService.getPostBySlug(slug).subscribe(
      res => { this.post = res; }
    );
  }

}
