import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Store } from '../models/Store';
import { Category } from '../models/Category';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  //PRODUCTS
  private _newProductEventEmitter: EventEmitter<Product> = new EventEmitter();

  private _idProductEventEmitter = new EventEmitter();

  private _findProductByIdEventEmitter = new EventEmitter();

  private _selectProductEventEmitter = new EventEmitter();

  //STORES

  private _newStoreEventEmitter: EventEmitter<Store> = new EventEmitter();

  private _idStoreEventEmitter = new EventEmitter();

  private _findStoreByIdEventEmitter = new EventEmitter();

  private _selectStoreEventEmitter = new EventEmitter();

  //CATEGORIES

  private _newCategoryEventEmitter: EventEmitter<Category> = new EventEmitter();

  private _idCategoryEventEmitter = new EventEmitter();

  private _findCategoryByIdEventEmitter = new EventEmitter();

  private _selectCategoryEventEmitter = new EventEmitter();

  //ORDERS

  private _newOrderEventEmitter: EventEmitter<Order> = new EventEmitter();

  private _idOrderEventEmitter = new EventEmitter();

  private _findOrderByIdEventEmitter = new EventEmitter();

  private _selectOrderEventEmitter = new EventEmitter();

  constructor() { }

  //PRODUCTOS
  get selectProductEventEmitter() {
    return this._selectProductEventEmitter;
  }

  get findProductByIdEventEmitter() {
    return this._findProductByIdEventEmitter
  }

  get newProductEventEmitter(): EventEmitter<Product> {
    return this._newProductEventEmitter;
  }

  get idProductEventEmitter(): EventEmitter<number> {
    return this._idProductEventEmitter;
  }

  //STORES
  get selectStoreEventEmitter() {
    return this._selectStoreEventEmitter;
  }

  get findStoreByIdEventEmitter() {
    return this._findStoreByIdEventEmitter
  }

  get newStoreEventEmitter(): EventEmitter<Store> {
    return this._newStoreEventEmitter;
  }

  get idStoreEventEmitter(): EventEmitter<number> {
    return this._idStoreEventEmitter;
  }

  //CATEGORIES
  get selectCategoryEventEmitter() {
    return this._selectCategoryEventEmitter;
  }

  get findCategoryByIdEventEmitter() {
    return this._findCategoryByIdEventEmitter
  }

  get newCategoryEventEmitter(): EventEmitter<Category> {
    return this._newCategoryEventEmitter;
  }

  get idCategoryEventEmitter(): EventEmitter<number> {
    return this._idCategoryEventEmitter;
  }

  //ORDERS
  get selectOrderEventEmitter() {
    return this._selectOrderEventEmitter;
  }

  get findOrderByIdEventEmitter() {
    return this._findOrderByIdEventEmitter
  }

  get newOrderEventEmitter(): EventEmitter<Order> {
    return this._newOrderEventEmitter;
  }

  get idOrderEventEmitter(): EventEmitter<number> {
    return this._idOrderEventEmitter;
  }
}
