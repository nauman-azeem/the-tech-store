import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {TestComponent} from './components/test/test.component';

const RoutesDefinition = [
  {
    path : '' , component : TestComponent
  }
];

export const AppRoutes = RouterModule.forRoot(RoutesDefinition);
