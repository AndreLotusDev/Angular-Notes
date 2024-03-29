import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from '../register/product/product.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        ProductComponent
    ],
    declarations: [
        ProductComponent
    ]
})
export class SharedModule {

}