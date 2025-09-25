import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Success } from './success/success';

export const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
{path:'success',component:Success}];
