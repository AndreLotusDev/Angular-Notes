import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PurchaseItem, SeedPurchaseItems } from '../models/purchase-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit {
  product: PurchaseItem = new PurchaseItem();
  isNew = true;
  ngAfterViewInit(): void {
    
  }

  purchasedItems: PurchaseItem[] = [];
  ngOnInit(): void {
    this.purchasedItems  = SeedPurchaseItems();
  }

  editItem(item: PurchaseItem) {
    this.product = item;
    this.isNew = false;
  }

  deleteItem(item: PurchaseItem) {
    let index = this.purchasedItems.indexOf(item);
    if (index > -1) {
      this.purchasedItems.splice(index, 1);
    }
  }

  addOrUpdateItem() {
    if (this.isNew) {
      this.purchasedItems.push(this.product);
    } else {
      let index = this.purchasedItems.indexOf(this.product);
      if (index > -1) {
        this.purchasedItems[index] = this.product;
      }
    }
    this.product = new PurchaseItem();
    this.isNew = true;
  }

  updateItem() {
    const updatedItem = { ...this.product };

    this.product = updatedItem;
  }
}
