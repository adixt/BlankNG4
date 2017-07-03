import { Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';


export const RootRouteMappingConfiguration: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'prefix' }
];
