import { Routes, RouterModule } from '@angular/router';
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
  TestComponent
} from './../components';
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
    path : ':category' , redirectTo: 'test', pathMatch: 'full'
  } , {
    path : ':category/:brand', redirectTo: 'codes', pathMatch: 'full'
  } , {
    path : ':category/:brand/:product', redirectTo: 'login', pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(RoutesDefinition);
