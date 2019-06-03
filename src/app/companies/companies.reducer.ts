import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Company } from './models/Company';

export interface CompaniesState extends EntityState<Company> {

}

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>();

const initialState = adapter.getInitialState();

export function reducer(state = initialState, action: Action): CompaniesState {
  switch (action.type) {

    default:
      return state;
  }
}
