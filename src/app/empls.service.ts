import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iempl } from './empl';
import { Observable } from 'rxjs';
//import './rxjs/add/Operators/catch';
//import './rxjs/add/observable/throw ';
import { catchError } from 'rxjs/operators';

import { Pipe } from '@angular/core';
//import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class EmplsService {

  private _url: string = "/assets/data/empl2.json";

  constructor( private http: HttpClient ) {  } //now we have local variable "http" to refer instance of "HttpClient"

  getempl(): Observable<Iempl[]>{ //imported observable from RxJS

    // <Iempl> is the type to get request
    return this.http.get<Iempl[]>(this._url).pipe(  // "_url" is the Private variable which access the data from "empl.json"
                   catchError(this.errorHandler));
          }
          
    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    
  }
}