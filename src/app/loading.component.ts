import { Component, Input } from '@angular/core';

@Component({
    selector: 'loading-indicator',
    styles: [`
        .loading {
        }
        .loading li {
            color: #999;
        }
    `],
    template: `
        <div class="loading">
            <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
    `
})
export class LoadingIndicatorComponent {

    constructor() { }

}
