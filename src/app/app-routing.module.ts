import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path:'home' , component: HomeComponent,
    
  },{
    path:'homeLazy' , loadChildren: () => import('./features/home-lazy/home-lazy.module').then(m => m.HomeLazyModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
