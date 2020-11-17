import { RouterModule, Routes } from '@angular/router';
import { HomeLazyComponent } from './home-lazy.component';

const routes: Routes = [
    { path: '', component: HomeLazyComponent },
];

export const HomeLazyRouting = RouterModule.forChild(routes);