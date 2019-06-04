import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyViewComponent } from './company-view/company-view.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromCompanies from './companies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompaniesEffects } from './companies.effects';
import * as fromPeople from './people.reducer';
import { PeopleEffects } from './people.effects';

@NgModule({
  declarations: [CompaniesListComponent, CompanyViewComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('companies', fromCompanies.reducer),
    EffectsModule.forFeature([CompaniesEffects, PeopleEffects]),
    StoreModule.forFeature('people', fromPeople.reducer)
  ]
})
export class CompaniesModule { }
