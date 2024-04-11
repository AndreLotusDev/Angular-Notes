import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { PurchaseItem } from '../../models/purchase-item.model';

@Component({
  selector: '[app-item-info]',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css'],
})
export class ItemInfoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: PurchaseItem;
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }
  ngOnDestroy(): void {
    console.log('destroyed item');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['item']) {
      console.log('item being edited');
    }
  }

  ngOnInit() {
    console.log('Started item');
  }

  
}
