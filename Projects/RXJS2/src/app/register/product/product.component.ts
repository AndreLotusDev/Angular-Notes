import { Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { Product } from "../../shared/models/product-model";
import { Store } from "@ngrx/store";
import { addProducts, loadProducts } from "../../app.action";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

    products: Product[] = [];

    @Input() product: Product | undefined;
    @Output() productSelected = new EventEmitter<Product>();

    constructor(private store: Store) { }
    ngOnInit(): void {

    }

    onSelected() {
        console.log('selected');
        this.productSelected.emit(this.product);

        this.store.dispatch(addProducts(this.product as Product));
    }

}
