import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EmployeeLoaded, EmployeeRequested, PeopleActionTypes } from './people.actions';
import { map, mergeMap } from 'rxjs/operators';
import { PeopleService } from '../people/people.service';



@Injectable()
export class PeopleEffects {

  @Effect()
  loadPerson$ = this.actions$.pipe(
    ofType<EmployeeRequested>(PeopleActionTypes.EmployeeRequested),
    mergeMap(action => this.people.getPersonById(action.payload.employeeId)),
    map(employee => new EmployeeLoaded({employee}))
  );

  constructor(private actions$: Actions,
              private people: PeopleService) {}

}
