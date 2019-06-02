import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyViewComponent } from './company-view/company-view.component';

@NgModule({
  declarations: [CompaniesListComponent, CompanyViewComponent],
  imports: [
    CommonModule
  ]
})
export class CompaniesModule { }
