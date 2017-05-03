import { Injectable } from '@angular/core';
import { Http, XHRBackend, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//import * as NProgress from 'nprogress';

export function customHttpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
    return new CustomHttp(backend, defaultOptions);
};

@Injectable()
export class CustomHttp extends Http {

    private _tasks: number = 0;

    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
        super(_backend, _defaultOptions);
        NProgress.configure({ showSpinner: false });
    }

    get(url: string, options?: RequestOptionsArgs) : Observable<Response> {
        this.startLoading();
        return super.get(url, options)
            .map(res => {
                this.stopLoading();
                return res;
            });
    }

    /**
     * Start the loading indicator if not already started.
     */
    private startLoading() {
        if (this._tasks == 0)
            NProgress.start();        
        this._tasks++;
    }

    /**
     * Stop the loading indicator if there isn't any running tasks.
     */
    private stopLoading() {
        this._tasks--;
        if (this._tasks == 0)
            NProgress.done();
    }

}