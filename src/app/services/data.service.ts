import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { IList, IData } from '../data/data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getData(value: string): Observable<IList[]> {
    return this.http
      .get<IData>(this.url)
      .pipe(map((list) => list.data.filter((item) => item.type === value)));
  }

  filterData(event: Event): Observable<IList[]> {
    const target = event.target as HTMLInputElement;
    const checked = target.checked as boolean;
    const value = target.value as string;

    if (checked) {
      return this.http
        .get<IData>(this.url)
        .pipe(map((list) => list.data.filter((item) => item.type === value)));
    }

    return of([]);
  }
}
