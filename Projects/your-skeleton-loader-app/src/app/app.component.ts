import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSkeletonLoaderModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  product: Product | null = null;
  products: Product[] = [];

  constructor() {
    this.product = new Product();
  }
  ngOnInit(): void {
    //After two seconds, load the products with detailed information, using RXJS

    setTimeout(() => {
      this.products = [
        new Product({
          id: 1,
          name: 'Product 1',
          price: 100,
          image: 'https://picsum.photos/id/100/200/300',
          description: '',
        }),
        new Product({
          id: 2,
          name: 'Product 2',
          price: 200,
          image: 'https://picsum.photos/id/101/200/300',
          description: '',
        }),
        new Product({
          id: 3,
          name: 'Product 3',
          price: 300,
          image: 'https://picsum.photos/id/102/200/300',
          description: '',
        }),
      ];
    }, 5000);
  }
}
