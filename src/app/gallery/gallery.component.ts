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
    current: number;
    loading: boolean;

    private setLoadingDebounce = _.debounce(function(isLoading: boolean) {
        this.loading = isLoading;
    }, 100);

    constructor() {
        this.current = 0;
        this.loading = true;
    }

    ngOnInit() { }

    setCurrent(index: number) {
        if (this.current === index)
            return;

        this.setLoading(true);
        this.current = index;
    }

    previous() {
        this.setCurrent((this.current - 1 < 0) ? this.images.length - 1 : this.current - 1);
    }

    next() {
        this.setCurrent((this.current + 1 > this.images.length - 1) ? 0 : this.current + 1);
    }

    setLoading(isLoading: boolean) {
        this.setLoadingDebounce(isLoading);
    }

}
