import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { noop, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Login, Logout } from './auth.actions';
import { isLoggedIn, isLoggedOut } from '../auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private auth: AuthService,
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(isLoggedIn);
    this.isLoggedOut$ = this.store.select(isLoggedOut);
  }

  onLogin() {
    this.auth.login().pipe(
      tap((userId) => {
        this.store.dispatch(new Login(userId));
      })
    ).subscribe(
      noop,
      err => alert(err)
    );
  }

  onLogout() {
    this.auth.logout().pipe(
      tap(() => {
        this.store.dispatch(new Logout());
      })
    ).subscribe(
      noop,
      err => alert(err)
    );
  }
}
