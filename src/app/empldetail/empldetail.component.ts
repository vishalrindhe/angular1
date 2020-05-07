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

    this.empl=this._emplservice.getempl();

  }

}
