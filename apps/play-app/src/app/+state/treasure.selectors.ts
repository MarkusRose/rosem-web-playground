import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectTreasure = createFeatureSelector<{
  going: boolean;
  opinion: string;
}>('treasure');

export const selectTreasureChoice = createSelector(
  selectTreasure,
  (treasure) => treasure.going,
);

export const selectTreasureOpinion = createSelector(
  selectTreasure,
  (treasure) => treasure.opinion,
);
