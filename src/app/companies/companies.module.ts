import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyViewComponent } from './company-view/company-view.component';
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
  declarations: [CompaniesListComponent, CompanyViewComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
