import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  // template specific items
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule // this includes Commonmodule
  ],
  providers: [], // used for DI - dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
