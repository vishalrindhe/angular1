import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmplComponent } from './empl/empl.component';
import { EmpllistComponent } from './empllist/empllist.component';
import { EmpldetailComponent } from './empldetail/empldetail.component';
import {EmplsService } from './empls.service';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmplComponent,
    EmpllistComponent,
    EmpldetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmplsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
