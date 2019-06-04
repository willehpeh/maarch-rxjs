import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PeopleState } from './people.reducer';

export const selectPeopleState = createFeatureSelector<PeopleState>('people');

export const selectPersonById = (id: string) => createSelector(
  selectPeopleState,
  peopleState => peopleState.entities[id]
);

