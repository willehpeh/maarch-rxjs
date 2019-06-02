import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Header] Login',
  Logout = '[Header] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { userId: string }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
  constructor() {}
}

export type AuthActions = Login | Logout;
