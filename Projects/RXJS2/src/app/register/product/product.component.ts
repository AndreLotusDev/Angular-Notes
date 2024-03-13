import { Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { Product } from "../../shared/models/product-model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

    @Input() product: Product | undefined;
    @Output() productSelected = new EventEmitter<Product>();

    constructor() { }
    ngOnInit(): void {

    }

    onSelected() {
        this.productSelected.emit(this.product);
    }

}
