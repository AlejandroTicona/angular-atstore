import { Injectable } from '@angular/core';
import { Store } from '../models/Store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private stores: Store[] = [];

  private url: string = 'http://localhost:8080/api/stores';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Store[]> {
    return this.http.get<Store[]>(this.url);
  }

  findById(id: number): Observable<Store> {
    return this.http.get<Store>(`${this.url}/${id}`);
  }

  create(store: Store): Observable<Store> {
    return this.http.post<Store>(this.url, store);
  }

  update(store: Store): Observable<Store> {
    return this.http.put<Store>(`${this.url}/${store.id}`, store);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
