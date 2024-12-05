import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [];

  private url: string = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.url}/${id}`);
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url, category);
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.url}/${category.id}`, category);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
