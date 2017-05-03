import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { customHttpFactory } from './custom-http';

@NgModule({
    imports: [HttpModule],
    exports: [HttpModule],
    providers: [
        {
            provide: Http,
            useFactory: customHttpFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ]
})
export class CustomHttpModule { }
