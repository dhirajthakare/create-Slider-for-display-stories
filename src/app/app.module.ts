import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowSliderComponent } from './show-slider/show-slider.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HomepageComponent } from './homepage/homepage.component'


@NgModule({
  declarations: [
    AppComponent,
    ShowSliderComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
