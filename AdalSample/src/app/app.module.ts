import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import * as c from './';

@NgModule({
  declarations: [
    c.AppComponent,
    c.MainComponent,
    c.HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [c.AppComponent]
})
export class AppModule { }
