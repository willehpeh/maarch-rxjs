import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, Logout } from './header/auth.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of } from 'rxjs';



@Injectable()
export class AuthEffects {

  @Effect()
  init$ = defer(() => {     // defer creates Observable when outer Observable is subscribed to
    const userId = localStorage.getItem('userId');
    if (userId) {
      return of(new Login({ userId }));
    } else {
      return of(new Logout());
    }
  });

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap(action => {
      localStorage.setItem('userId', action.payload.userId);
      this.router.navigateByUrl('companies');
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(action => {
      localStorage.removeItem('userId');
      this.router.navigateByUrl('');
    })
  );

  constructor(private actions$: Actions,
              private router: Router) {}

}
