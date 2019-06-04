import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Person } from '../people/models/Person';
import { PeopleActions, PeopleActionTypes } from './people.actions';


export interface PeopleState extends EntityState<Person> {

}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>();

export const initialState: PeopleState = adapter.getInitialState();

export function reducer(state = initialState, action: PeopleActions): PeopleState {
  switch (action.type) {
    case PeopleActionTypes.EmployeeLoaded:
      return adapter.addOne(action.payload.employee, state);
    default:
      return state;
  }
}
