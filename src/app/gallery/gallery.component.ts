import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'underscore';

import { Image } from './image';

@Component({
    selector: 'gallery',
    styleUrls: ['./gallery.component.css'],
    templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
    
    @Input() images: Image[] = new Array();
    current: number = 0;
    loading: boolean = true;

    constructor() {
    }

    ngOnInit() { }

    setCurrent(index: number) {
        if (this.current == index)
            return;
        
        this.setLoading(true);
        this.current = index;
    }

    previous() {
        this.setCurrent((this.current-1 < 0) ? this.images.length-1 : this.current-1);
    }

    next() {
        this.setCurrent((this.current+1 > this.images.length-1) ? 0 : this.current+1);
    }

    setLoading(isLoading: boolean) {
        this.setLoadingDebounce(isLoading);
    }

    private setLoadingDebounce = _.debounce(function(isLoading: boolean) {
        this.loading = isLoading;
    }, 100);

}
