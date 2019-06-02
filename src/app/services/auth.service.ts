import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login() {
    return of({ userId: '4ef255ac4' }).pipe(
      delay(1000)
    );
  }

  logout() {
    return of(false).pipe(
      delay(500)
    );
  }
}
