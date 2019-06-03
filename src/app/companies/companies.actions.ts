import { Action } from '@ngrx/store';
import { Company } from './models/Company';

export enum CompaniesActionTypes {
  CompanyRequested = '[Company Resolver] Company Requested',
  CompanyLoaded = '[Companies API] Company Loaded',
  CompanyLoadFailed = '[Companies API] Company Load Failed',
  AllCompaniesRequested = '[Companies List View] All Companies Requested',
  AllCompaniesLoaded = '[Companies API] All Companies Loaded',
  AllCompaniesLoadFailed = '[Companies API] All Companies Load Failed'
}

export class CompanyRequested implements Action {
  readonly type = CompaniesActionTypes.CompanyRequested;
  constructor(public payload: {companyId: string}) {}
}

export class CompanyLoaded implements Action {
  readonly type = CompaniesActionTypes.CompanyLoaded;
  constructor(public payload: {company: Company}) {}
}

export class CompanyLoadFailed implements Action {
  readonly type = CompaniesActionTypes.CompanyLoadFailed;
}

export class AllCompaniesRequested implements Action {
  readonly type = CompaniesActionTypes.AllCompaniesRequested;
}

export class AllCompaniesLoaded implements Action {
  readonly type = CompaniesActionTypes.AllCompaniesLoaded;
  constructor(public payload: { companies: Company[] }) {}
}

export class AllCompaniesLoadFailed implements Action {
  readonly type = CompaniesActionTypes.AllCompaniesLoadFailed;
}

export type CompaniesActions =
  CompanyRequested |
  CompanyLoaded |
  CompanyLoadFailed |
  AllCompaniesRequested |
  AllCompaniesLoaded |
  AllCompaniesLoadFailed;
