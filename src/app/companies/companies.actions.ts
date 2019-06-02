import { Action } from '@ngrx/store';

export enum CompaniesActionTypes {
  LoadCompanies = '[Companies] Load Companies',


}

export class LoadCompanies implements Action {
  readonly type = CompaniesActionTypes.LoadCompanies;
}


export type CompaniesActions = LoadCompanies;
