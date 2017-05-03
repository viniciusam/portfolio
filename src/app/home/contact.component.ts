import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AppValidators } from '../app-validators';
import { HomeService } from './home.service';
import { AlertComponent } from './alert.component';

@Component({
    selector: 'contact',
    styles: [`
        .contact-icons {
            text-align: center;
        }
        .contact-icons a {
            margin: 10px;
        }
        .alert-wrapper {
            margin-top: 20px;
        }
    `],
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;
    sending: boolean;

    @ViewChild(AlertComponent)
    private alertComponent: AlertComponent;

    constructor(fb: FormBuilder, private _homeService: HomeService) { 
        this.contactForm = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, AppValidators.email])],
            message: ['', Validators.required],
        });
    }

    ngOnInit() { }

    isInvalid(control: FormControl, validator?: string) {
        return control.touched &&
               ((!validator && control.errors) || (validator && control.hasError(validator)));
    }

    send() {
        this.sending = true;
        this.alertComponent.hide();
        this._homeService.sendMail(this.contactForm.value)
            .subscribe(
                res => {
                    this.sending = false;
                    if (res.statusText == 'OK') {
                        this.contactForm.reset();
                        this.alertComponent.show("Message sent! Thank you, I will reply asap.", "success");
                    }
                },
                err => {
                    this.sending = false;
                    this.alertComponent.show("Error! Please contact me on LinkedIn or Skype.", "danger");
                    console.log(err);
                }
            );
    }

}
