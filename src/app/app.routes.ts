import { Routes } from '@angular/router';
import {Login} from './components/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.routes').then(value => value.DASHBOARD_ROUTES)},
  { path: '**' , redirectTo: 'login', pathMatch: 'full'}
];
