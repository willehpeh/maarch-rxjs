import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CompaniesActionTypes, CompanyLoaded, CompanyLoadFailed, CompanyRequested } from './companies.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CompaniesService } from './companies.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { EMPTY } from 'rxjs';



@Injectable()
export class CompaniesEffects {

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
