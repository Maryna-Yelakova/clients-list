import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ClientsService {

    private clientsUrl = 'api/clients';  // URL to web API

    constructor(private http: Http) { };

    getClientsList(){
        return this.http.get(this.clientsUrl)
                        .map((res:Response) => res)
                        .catch((error:any) => Observable.throw(error || 'Server error'));
    }

}