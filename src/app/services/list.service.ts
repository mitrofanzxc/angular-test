import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  // filterList(type: string): void {
  //   this.list.data = list.data.filter((item) => item.type === type);
  // }
}
