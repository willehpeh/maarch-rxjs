import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompaniesState } from './companies.reducer';

import * as fromCompany from './companies.reducer';

export const selectCompaniesState = createFeatureSelector<CompaniesState>('companies');

export const selectCompanyById = (companyId: string) => createSelector(
  selectCompaniesState,
  companiesState => companiesState.entities[companyId]
);

export const selectAllCompanies = createSelector(
  selectCompaniesState,
  fromCompany.selectAll
);

export const selectForProfitCompanies = createSelector(
  selectAllCompanies,
  companies => companies.filter(company => company.companyType === 'For Profit')
);

export const selectNonProfitCompanies = createSelector(
  selectAllCompanies,
  companies => companies.filter(company => company.companyType === 'Non-profit')
);

export const allCoursesLoaded = createSelector(
  selectCompaniesState,
  companiesState => companiesState.allCompaniesLoaded
);
