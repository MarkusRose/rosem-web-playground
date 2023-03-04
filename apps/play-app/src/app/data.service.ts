import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { WeekDays } from '@rosem-playground/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data$: Observable<WeekDays>;
  private url: string;

  constructor(private readonly http: HttpClient) {
    this.url = 'http://localhost:3333/api/days';
  }

  public load(): Observable<string[]> {
    this.data$ = this.http.get<WeekDays>(this.url);
    return this.data$.pipe(map((data) => data.days));
  }

  public create(name: string): Observable<any> {
    console.log(`Want to add data with value: ${name}`);
    return this.http.post(this.url, { value: name });
  }
}
