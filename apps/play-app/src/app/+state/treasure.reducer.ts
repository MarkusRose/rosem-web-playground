import { createReducer, on } from '@ngrx/store';
import { useNewCheck, useNewOpinion } from './treasure.actions';

export const initialState = {
  check: false,
  opinion: 'Im initialized',
};

export const treasureReducer = createReducer(
  initialState,
  on(useNewCheck, (state, { check }) => {
    return {
      ...state,
      check,
    };
  }),
  on(useNewOpinion, (state, { opinion }) => {
    return {
      ...state,
      opinion,
    };
  }),
);
