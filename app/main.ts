import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import { HTTP_PROVIDERS } from 'angular2/http';
import {RestCallService} from './restcall.service';
bootstrap(AppComponent,[ HTTP_PROVIDERS]);