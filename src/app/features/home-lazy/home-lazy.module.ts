import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeLazyComponent } from './home-lazy.component';
import { HomeLazyRouting } from './home.-lazy.routing';

@NgModule({
  declarations: [
    HomeLazyComponent
  ],
  imports: [
    HomeLazyRouting,
    HttpClientModule,
  ],
  providers: [],
})
export class HomeLazyModule { }