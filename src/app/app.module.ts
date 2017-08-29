// Core Imports
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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
  CategoryComponent,
  BrandComponent,
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

// Plugins Imports
import {
  QUBAngularPluginComponent
} from './plugins';

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
    ProductComponent,
    CategoryComponent,
    BrandComponent,
    QUBAngularPluginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
