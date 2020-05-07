import { Component, OnInit } from '@angular/core';
import { EmplsService } from '../empls.service';

@Component({
  selector: 'app-empllist',
  template: `<h2>EMPL LIST FROM empllist</h2>
  <ul *ngFor="let empll of empl">
  <li> {{empll.id}}. {{empll.name}} - {{empll.age}} </li>
</ul>

`,
  styleUrls: ['./empllist.component.css']
})
export class EmpllistComponent implements OnInit {

  public empl=[];

  constructor(private _emplservice: EmplsService) { }

  ngOnInit(): void {

    this.empl=this._emplservice.getempl();


  }

}
