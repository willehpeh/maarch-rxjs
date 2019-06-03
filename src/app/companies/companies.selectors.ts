import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompaniesState } from './companies.reducer';

export const selectCompaniesState = createFeatureSelector<CompaniesState>('companies');

export const selectCompanyById = (companyId: string) => createSelector(
  selectCompaniesState,
  companiesState => companiesState.entities[companyId]
);
