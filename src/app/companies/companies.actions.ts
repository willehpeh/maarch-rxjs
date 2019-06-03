import { Action } from '@ngrx/store';
import { Company } from './models/Company';

export enum CompaniesActionTypes {
  CompanyRequested = '[Company List Page] Company Requested',
  CompanyLoaded = '[Companies API] Company Loaded'
}

export class CompanyRequested implements Action {
  readonly type = CompaniesActionTypes.CompanyRequested;
  constructor(public payload: {companyId: string}) {}
}

export class CompanyLoaded implements Action {
  readonly type = CompaniesActionTypes.CompanyLoaded;
  constructor(public payload: {company: Company}) {}
}

export type CompaniesActions =
  CompanyRequested |
  CompanyLoaded;
