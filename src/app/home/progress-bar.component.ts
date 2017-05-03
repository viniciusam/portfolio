import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'progress-bar',
    styles: [`
        .progress {
            height: 25px;
            margin-bottom: 10px;
        }
        .progress-bar {
            height: 100%;
        }
    `],
    template: `
        <div *ngIf="label"><strong>{{ label }}</strong> - <em class="text-muted">{{ getDescription() }}</em></div>
        <div class="progress">
            <div class="progress-bar" role="progressbar"
                 [attr.aria-valuemax]="max"
                 [attr.aria-valuemin]="min"
                 [attr.aria-valuenow]="value"
                 [style.width.%]="value"
                 [ngClass]="getClass()"></div>
        </div>
    `
})
export class ProgressBarComponent implements OnInit {
    
    @Input() label: string;
    @Input() value: number;
    min: number = 0;
    max: number = 100;

    constructor() { }

    ngOnInit() { }

    getClass() {
        if (this.value < this.max*0.60)
            return 'bg-warning';
        if (this.value >= this.max*0.60 && this.value < this.max*0.85)
            return 'bg-success';
        if (this.value >= this.max*0.85)
            return 'bg-info';
    }

    getDescription() {
        if (this.value < this.max*0.60)
            return 'Beginner';
        if (this.value >= this.max*0.60 && this.value < this.max*0.85)
            return 'Intermediate';
        if (this.value >= this.max*0.85)
            return 'Experienced';
    }

}
