import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'companies', canActivate: [AuthGuard], loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'people', canActivate: [AuthGuard], loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
  { path: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
