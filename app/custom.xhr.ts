import {Injectable} from 'angular2/core';
import {BrowserXhr} from 'angular2/http';

@Injectable()
@Injectable()
export class CustomBrowserXhr extends BrowserXhr {
    constructor() {}
    build(): any {
        let xhr = super.build();
        xhr.responseType = "blob";
        return <any>(xhr);
    }
}