import { Action } from '@ngrx/store';
import { Company } from './models/Company';

export enum CompaniesActionTypes {
  CompanyRequested = '[Company Resolver] Company Requested',
  CompanyLoaded = '[Companies API] Company Loaded',
  CompanyLoadFailed = '[Company Resolver] Company Load Failed'
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
  constructor() {}
}

export type CompaniesActions =
  CompanyRequested |
  CompanyLoaded |
  CompanyLoadFailed;
