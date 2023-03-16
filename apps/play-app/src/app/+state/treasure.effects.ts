import { Injectable } from '@nestjs/common';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs';

@Injectable()
export class TreasureEffects {
  storeTreasureChoice$ = createEffect(() =>
    this.actions$.pipe(tap((action) => console.log(action))),
  );

  constructor(private actions$: Actions) {}
}
