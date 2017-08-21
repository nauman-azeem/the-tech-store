import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent, AppRoutes } from './';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
