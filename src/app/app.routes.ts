import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {NotFoundPage} from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    { path: '', component: HomePage ,pathMatch: 'full' },
    {path: 'home', component: HomePage},
    { loadComponent: () => import('./pages/sign-in-page/sign-in-page').then(m => m.SignInPage), path: 'sign-in' },
    { loadComponent: () => import('./pages/sign-up-page/sign-up-page').then(m => m.SignUpPage), path: 'sign-up' },
    {path: '**', component: NotFoundPage}
];
