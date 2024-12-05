import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [];

  private url: string = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url);
  }

  findById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.url}/${id}`);
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.url, order);
  }

  update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.url}/${order.id}`, order);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
