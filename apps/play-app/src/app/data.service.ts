import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: string[];

  constructor() {
    this.data = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
  }

  public load(): Observable<string[]> {
    return of(this.data);
  }

  public create(value: string) {
    this.data.push(value);
  }
}
