import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { 
  AppComponent,
  AppRoutes
} from './';

import {
  AboutComponent,
  CareComponent,
  CartComponent,
  CodesComponent,
  ContactComponent,
  FaqsComponent,
  HoldComponent,
  HomeComponent,
  KitchenComponent,
  LoginComponent,
  OfferComponent,
  RegisterComponent,
  ShippingComponent,
  SingleComponent,
  TermsComponent,
  HeaderComponent,
  FooterComponent,
  SliderComponent,
  TestComponent
} from './components';

import { 
  DropdownDirective
} from './directives';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    LoginComponent,
    AboutComponent,
    CareComponent,
    ContactComponent,
    FaqsComponent,
    HoldComponent,
    HomeComponent,
    OfferComponent,
    RegisterComponent,
    ShippingComponent,
    SingleComponent,
    TermsComponent,
    CartComponent,
    CodesComponent,
    KitchenComponent,
    DropdownDirective,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
