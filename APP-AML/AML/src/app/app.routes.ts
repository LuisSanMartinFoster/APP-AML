import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () =>
            import('./gifs/pages/dashboard-page/dashboard-page.component'),

        children: [
            {
                path: 'agreements',
                loadComponent: () =>
                    import('./gifs/pages/agreements-page/agreements-page.component')
            },

            {
                path: 'activity',
                loadComponent: () =>
                    import('./gifs/pages/activity-page/activity-page.component')
            },

            {
                path: '**',
                redirectTo: 'activity'
            }

        ]
    },



    {
        path: '**',
        redirectTo: 'dashboard'
    }


];
