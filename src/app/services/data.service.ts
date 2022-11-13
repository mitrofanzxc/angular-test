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
}
