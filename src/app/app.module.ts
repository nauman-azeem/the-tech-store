import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent, AppRoutes } from './';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { TestComponent } from './components/test';
import { LoginComponent } from './components/login';
import { AboutComponent } from './components/about';
import { CareComponent } from './components/care';
import { ContactComponent } from './components/contact';
import { FaqsComponent } from './components/faqs';
import { HoldComponent } from './components/hold';
import { HomeComponent } from './components/home';
import { OfferComponent } from './components/offer';
import { RegisterComponent } from './components/register';
import { ShippingComponent } from './components/shipping';
import { SingleComponent } from './components/single';
import { TermsComponent } from './components/terms';
import { CartComponent } from './components/cart';
import { CodesComponent } from './components/codes';
import { KitchenComponent } from './components/kitchen';

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
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
