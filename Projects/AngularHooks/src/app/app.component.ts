import { Component, OnInit } from '@angular/core';
import { PurchaseItem, SeedPurchaseItems } from '../models/purchase-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  purchasedItems: PurchaseItem[] = [];
  ngOnInit(): void {
    this.purchasedItems  = SeedPurchaseItems();
  }

}
