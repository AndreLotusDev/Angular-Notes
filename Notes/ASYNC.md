---
aliases: 
tags: 
date created: Thursday, May 16th 2024, 5:38:10 pm
date modified: Thursday, May 16th 2024, 5:50:09 pm
---
O async pipe semelhante ao que temos no c# é usado para desembrulhar observaveis quando possível, e inclusive signals na versão do angular 17.

Exemplo: 

```typescript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Product {
  name: string;
  description: string;
  price: number;
}

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
```

```typescript
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService, Product } from './product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <ul>
      <li *ngFor="let product of products$ | async">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p><strong>Price:</strong> {{ product.price | currency }}</p>
      </li>
    </ul>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }
}
```

Nesse exemplo por exemplo, no front end, só iremos renderizar quando o products nao for vazio e receber um hit do service.

---