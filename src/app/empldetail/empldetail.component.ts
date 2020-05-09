import { Component, OnInit } from '@angular/core';
import { EmplsService } from '../empls.service';

@Component({
  selector: 'app-empldetail',
  template: `<h2>EMPL LIST from empldetail </h2>
  <ul *ngFor="let empll of empl">
  <li> {{empll.id}}. {{empll.name}} - {{empll.age}} </li>
</ul>


`,
  styleUrls: ['./empldetail.component.css']
})
export class EmpldetailComponent implements OnInit {

  public empl=[];

  constructor(private _emplservice: EmplsService) { }

  ngOnInit(): void {

    this._emplservice.getempl() //instance "emplservice" used to called "getempl()" method this return observable
      .subscribe(data =>this.empl =data); // left side "data" is argument of function and right side is bod to function
      //we assign Iempl data(right hand side) to empl propert
      // to receive data from return of observable we need to sunscribe to it
      
  }

}
