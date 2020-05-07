import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empl',
  template: `<h2>EMPL LIST </h2>
    <ul *ngFor="let empll of empl">
    <li> {{empll.id}}. {{empll.name}} - {{empll.age}} </li>
</ul>
  
  
  `,
  styleUrls: ['./empl.component.css']
})
export class EmplComponent implements OnInit {

  public empl=[];

  constructor() { }

  ngOnInit(): void {
  }

}
