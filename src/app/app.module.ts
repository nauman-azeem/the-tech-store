// Core Imports
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// App Imports
import { 
  AppComponent,
} from './';

// Components Imports
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
  ProductComponent,
  TestComponent
} from './components';

// Directives Imports
import { 
  DropdownDirective
} from './directives';

// Routes Imports
import {
  AppRoutes
} from './routes';

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
    SliderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
