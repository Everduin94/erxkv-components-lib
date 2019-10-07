import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ErxkvComponentLibModule } from 'erxkv-component-lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ErxkvComponentLibModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
