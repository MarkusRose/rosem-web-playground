import { createAction, props } from '@ngrx/store';

export const useNewCheck = createAction(
  '[Treasure] Use new check',
  props<{ check: boolean }>(),
);

export const useNewOpinion = createAction(
  '[Treasure] Use new opinion',
  props<{ opinion: string }>(),
);
