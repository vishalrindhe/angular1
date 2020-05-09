import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iempl } from './empl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplsService {

  private _url: String = "/assets/data/empl.json";

  constructor( private http: HttpClient ) {  } //now we have local variable "http" to refer instance of "HttpClient"

  getempl(): Observable<Iempl[]>{ //imported observable from RxJS

    // <Iempl> is the type to get request
    return this.http.get<Iempl[]>(this._url) ; // "_url" is the Private variable which access the data from "empl.json"
  }
}
 