import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdalService, AdalGuard, AdalInterceptor } from 'adal-angular4';

import * as c from './';

@NgModule({
  declarations: [c.AppComponent, c.MainComponent, c.HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    AdalService,
    AdalGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdalInterceptor,
      multi: true
    }
  ],
  bootstrap: [c.AppComponent]
})
export class AppModule {}
