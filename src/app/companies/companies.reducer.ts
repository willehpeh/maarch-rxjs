import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Company } from './models/Company';
import { CompaniesActions, CompaniesActionTypes } from './companies.actions';

export interface CompaniesState extends EntityState<Company> {}

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>();

export function reducer(state = adapter.getInitialState(), action: CompaniesActions): CompaniesState {
  switch (action.type) {
    case CompaniesActionTypes.CompanyLoaded:
      return adapter.addOne(action.payload.company, state);
    default:
      return state;
  }
}
