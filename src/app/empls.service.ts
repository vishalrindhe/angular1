import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmplsService {

  constructor() { }

  getempl(){

    return[
      { "id": 1, "name": "andrew", "age": 30},
      { "id": 2, "name": "brad", "age": 20},
      { "id": 3, "name": "john", "age": 40},
      { "id": 4, "name": "debra", "age": 50}
  
    ];
  }
}
