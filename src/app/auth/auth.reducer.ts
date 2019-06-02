import { AuthActions, AuthActionTypes } from '../header/auth.actions';


export interface AuthState {
  loggedIn: boolean,
  userId: string;
}

export const initialState: AuthState = {
  loggedIn: false,
  userId: null
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        loggedIn: true,
        userId: action.payload.userId
      };
    case AuthActionTypes.Logout:
      return {
        loggedIn: false,
        userId: null
      };
    default:
      return state;
  }
}
