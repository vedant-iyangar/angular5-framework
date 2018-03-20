import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomPreloader} from './preload/custom-preloader';
import {AuthGuardService} from './guard/auth-guard.service';


const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: './feature/feature.module#FeatureModule',
    data: { preload: false }, // Whether or not preload this module. Used by Custom Pre-loader
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloader,
    })
  ],
  providers: [CustomPreloader],
  exports: [RouterModule]
})
export class AppRoutingModule { }
