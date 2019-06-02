import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyViewComponent } from './company-view/company-view.component';
import { CompanyResolver } from './resolvers/company.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CompaniesListComponent },
  { path: ':id', component: CompanyViewComponent, resolve: { company: CompanyResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CompanyResolver],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {}
