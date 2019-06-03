import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Company } from './models/Company';
import { CompaniesActions, CompaniesActionTypes } from './companies.actions';

export interface CompaniesState extends EntityState<Company> {
  allCompaniesLoaded: boolean;
}

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>();

const initialState = adapter.getInitialState({
  allCompaniesLoaded: false
});

export function reducer(state = initialState, action: CompaniesActions): CompaniesState {
  switch (action.type) {

    case CompaniesActionTypes.CompanyLoaded:
      return adapter.addOne(action.payload.company, state);

    case CompaniesActionTypes.AllCompaniesLoaded:
      return adapter.addAll(action.payload.companies, { ...state, allCompaniesLoaded: true });
    default:
      return state;
  }
}

export const {
  selectAll
} = adapter.getSelectors();
