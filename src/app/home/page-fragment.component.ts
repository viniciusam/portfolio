import { Component, OnInit, Input } from '@angular/core';

import { HomeService } from './home.service';
import { Page } from '../model';

@Component({
    selector: 'page-fragment',
    template: '<div [innerHTML]="page?.content.rendered"></div>'
})
export class PageFragmentComponent implements OnInit {
    
    @Input() slug: string;
    page: Page;

    constructor(private _homeService: HomeService) { }

    ngOnInit() {
        this._homeService.getPage(this.slug).subscribe(
            res => { this.page = res; }
        )
    }

}
