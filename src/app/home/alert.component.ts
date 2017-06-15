import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit {

    private type: string;
    private visible: boolean;
    private message: string;

    constructor() {
        this.type = 'info';
        this.visible = false;
    }

    ngOnInit() {
    }

    @Input()
    show(message: string, type?: string) {
        this.message = message;
        this.type = type ? type : 'info';
        this.visible = true;
    }

    @Input()
    hide() {
        this.visible = false;
    }

}
