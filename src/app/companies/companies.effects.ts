import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AllCompaniesLoaded,
  AllCompaniesLoadFailed,
  AllCompaniesRequested,
  CompaniesActionTypes,
  CompanyLoaded,
  CompanyLoadFailed,
  CompanyRequested
} from './companies.actions';
import { catchError, exhaustMap, filter, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { CompaniesService } from './companies.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { EMPTY, of } from 'rxjs';
import { allCoursesLoaded } from './companies.selectors';



@Injectable()
export class CompaniesEffects {

  @Effect()
  loadAllCompanies$ = this.actions$.pipe(
    ofType<AllCompaniesRequested>(CompaniesActionTypes.AllCompaniesRequested),
    withLatestFrom(this.store.select(allCoursesLoaded)),
    filter(([action, loaded]) => !loaded),
    exhaustMap(() => this.companies.getAllCompanies().pipe(
      catchError(err => {
        this.store.dispatch(new AllCompaniesLoadFailed());
        return of([]);
      })
    )),
    map(companies => new AllCompaniesLoaded({companies}))
  );

  @Effect()
  loadCompany$ = this.actions$.pipe(
    ofType<CompanyRequested>(CompaniesActionTypes.CompanyRequested),
    mergeMap(action => this.companies.getCompanyById(action.payload.companyId).pipe(
      catchError(err => {
        this.store.dispatch(new CompanyLoadFailed());
        return EMPTY;
      }),
    )),
    map(company => new CompanyLoaded({company})),
  );

  @Effect({ dispatch: false })
  companyLoadFailed$ = this.actions$.pipe(
    ofType<CompanyLoadFailed>(CompaniesActionTypes.CompanyLoadFailed),
    tap(() => this.router.navigateByUrl('companies'))
  );

  constructor(private actions$: Actions,
              private companies: CompaniesService,
              private router: Router,
              private store: Store<AppState>) {}

}
