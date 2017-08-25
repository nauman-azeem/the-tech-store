import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { AboutComponent } from './components/about';
import { CareComponent } from './components/care';
import { ContactComponent } from './components/contact';
import { FaqsComponent } from './components/faqs';
import { HoldComponent } from './components/hold';
import { OfferComponent } from './components/offer';
import { RegisterComponent } from './components/register';
import { ShippingComponent } from './components/shipping';
import { SingleComponent } from './components/single';
import { TermsComponent } from './components/terms';
import { CartComponent } from './components/cart';
import { TestComponent } from './components/test';
import { CodesComponent } from './components/codes';
import { KitchenComponent } from './components/kitchen';

const RoutesDefinition = [
  {
    path : '' , component : HomeComponent
  } , {
    path : 'login' , component : LoginComponent
  } , {
    path : 'about' , component : AboutComponent
  } , {
    path : 'care' , component : CareComponent
  } , {
    path : 'contact' , component : ContactComponent
  } , {
    path : 'faqs' , component : FaqsComponent
  } , {
    path : 'hold' , component : HoldComponent
  } , {
    path : 'offer' , component : OfferComponent
  } , {
    path : 'register' , component : RegisterComponent
  } , {
    path : 'shipping' , component : ShippingComponent
  } , {
    path : 'single' , component : SingleComponent
  } , {
    path : 'terms' , component : TermsComponent
  } , {
    path : 'cart' , component : CartComponent
  } , {
    path : 'test' , component : TestComponent
  } , {
    path : 'codes' , component : CodesComponent
  } , {
    path : 'kitchen' , component : KitchenComponent
  } , {
    path : '**' , redirectTo: '', pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(RoutesDefinition);
