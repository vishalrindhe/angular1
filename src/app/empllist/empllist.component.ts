import { Component, OnInit } from '@angular/core';
import { EmplsService } from '../empls.service';

@Component({
  selector: 'app-empllist',

  template: `<h2>EMPL LIST FROM empllist</h2>
  <h3> {{errorMsg}} </h3>
  <ul *ngFor="let empll of empl">
  <li> {{empll.id}}. {{empll.name}} - {{empll.age}} </li>
</ul>

`,
  styleUrls: ['./empllist.component.css']
})
export class EmpllistComponent implements OnInit {

  public empl=[];
  public errorMsg;

  constructor(private _emplservice: EmplsService) { } // "_emplservice" is instance

  ngOnInit(): void {

    this._emplservice.getempl() //instance "emplservice" used to called "getempl()" method this return observable
      .subscribe(data =>this.empl =data, // left side "data" is argument of function and right side is bod to function
      //we assign Iempl data(right hand side) to empl propert
      // to receive data from return of observable we need to sunscribe to it
          error => this.errorMsg = error);

  }

}
