import { Component, OnInit } from '@angular/core';

import { BlogService } from './blog.service';
import { Category, Tag } from '../model';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  categories: Category[];
  tags: Tag[];

  constructor(private _blogService: BlogService) {
  }

  ngOnInit() {
    this.loadCategories();
    // this.loadTags();
  }

  loadCategories() {
    this._blogService.getCategories().subscribe(
      res => { this.categories = res; }
    );
  }

  loadTags() {
    this._blogService.getTags().subscribe(
      res => { this.tags = res; }
    );
  }

}
