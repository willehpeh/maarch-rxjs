import { Action } from '@ngrx/store';
import { Person } from '../people/models/Person';

export enum PeopleActionTypes {
  EmployeeRequested = '[Company View] Employee Requested',
  EmployeeLoaded = '[Employee API] Employee Loaded'
}

export class EmployeeRequested implements Action {
  readonly type = PeopleActionTypes.EmployeeRequested;
  constructor(public payload: { employeeId: string }) {}
}

export class EmployeeLoaded implements Action {
  readonly type = PeopleActionTypes.EmployeeLoaded;
  constructor(public payload: { employee: Person }) {}
}


export type PeopleActions = EmployeeRequested | EmployeeLoaded;
