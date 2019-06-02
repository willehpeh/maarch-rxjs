import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyViewComponent } from './company-view/company-view.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompaniesListComponent, CompanyViewComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CompaniesModule { }
