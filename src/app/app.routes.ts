import { Routes } from '@angular/router';
import { Login } from './feature/login/login';
import { Dashboard } from './feature/dashboard/dashboard';
import { authGuard } from './core/auth/auth-guard';

export const routes: Routes = [
    { path: "", component: Login },
    { path: "login", component: Login },
    {path : "dashboard" , component : Dashboard , canActivate : [authGuard]},
    { path: '**', redirectTo: '', pathMatch: 'full' } 
];
