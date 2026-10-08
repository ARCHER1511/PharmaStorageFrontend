import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'register',
        loadComponent: () =>
            import('./pages/register/register')
                .then(m => m.RegisterComponent)
    }
];
