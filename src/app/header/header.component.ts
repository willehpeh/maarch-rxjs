import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { subscribeOn, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { noop } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.auth.login().pipe(
      tap(() => this.router.navigateByUrl('companies'))
    ).subscribe(
      noop,
      err => alert(err)
    );
  }

  onLogout() {
    this.auth.logout().pipe(
      tap(() => this.router.navigateByUrl(''))
    ).subscribe(
      noop,
      err => alert(err)
    );
  }
}
