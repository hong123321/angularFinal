import { NgModule } from '@angular/core';
import { SnowComponent } from './snow.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SnowComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SnowComponent
  ]
})
export class SnowModule { }
