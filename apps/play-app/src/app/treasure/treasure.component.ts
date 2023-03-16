import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { delay, last, tap } from 'rxjs';
import { useNewCheck, useNewOpinion } from '../+state/treasure.actions';
import {
  selectTreasureChoice,
  selectTreasureOpinion,
} from '../+state/treasure.selectors';

@Component({
  selector: 'rosem-playground-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.less'],
})
export class TreasureComponent implements OnInit {
  public huntTreasureForm = new FormControl<boolean>(false);
  public treasureOpinionForm = new FormControl<string>('');
  public treasureChoice$ = this.store.select(selectTreasureChoice);
  public opinion$ = this.store.select(selectTreasureOpinion);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.opinion$.pipe(delay(5000)).subscribe((opinion) => {
      if (this.treasureOpinionForm.pristine) {
        this.treasureOpinionForm.setValue(opinion);
      }
    });
  }

  public onSubmit() {
    const check = this.huntTreasureForm.value;
    if (check !== null) {
      this.store.dispatch(useNewCheck({ check }));
    }
  }

  public onChange(e: string) {
    this.store.dispatch(useNewOpinion({ opinion: e }));
  }
}
