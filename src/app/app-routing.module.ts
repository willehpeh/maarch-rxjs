import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) },
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
