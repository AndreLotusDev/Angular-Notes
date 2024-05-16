import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of([
      { name: 'Product 1', description: 'Description 1', price: 100 },
      { name: 'Product 2', description: 'Description 2', price: 200 },
      { name: 'Product 3', description: 'Description 3', price: 300 }
    ]).pipe(
      delay(1000) 
    );
  }
}
