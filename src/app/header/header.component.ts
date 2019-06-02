import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { noop } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Login, Logout } from './auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit() {
  }

  onLogin() {
    this.auth.login().pipe(
      tap((userId) => {
        this.store.dispatch(new Login(userId));
        this.router.navigateByUrl('companies');
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
        this.router.navigateByUrl('');
      })
    ).subscribe(
      noop,
      err => alert(err)
    );
  }
}
