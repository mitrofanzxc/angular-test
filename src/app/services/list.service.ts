import { IData } from './../data/list.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of, Observable } from 'rxjs';
import { IList } from '../data/list.interface';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private url = 'assets/list.json';

  constructor(private http: HttpClient) {}

  getList(): Observable<IList> {
    return this.http.get<IList>(this.url);
  }

  filterList(event: Event): Observable<IData[]> {
    const target = event.target as HTMLInputElement;
    const checked = target.checked as boolean;
    const value = target.value as string;

    if (checked) {
      return this.http
        .get<IList>(this.url)
        .pipe(map((list) => list.data.filter((item) => item.type === value)));
    }

    return of([]);
  }
}
