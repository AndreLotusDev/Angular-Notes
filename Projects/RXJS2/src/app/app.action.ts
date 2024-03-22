import { createAction, props } from "@ngrx/store";
import { Product } from "./shared/models/product-model";

export const addProducts = createAction('[Products] Add Product', (product: Product) => product);
export const removeProducts = createAction('[Products] Remove Product', props<{productId: number}>());
export const loadProducts = createAction('[Products] Load Products');
export const finishLoad = createAction('[Products] Finish Load')
export const removeLastProduct = createAction('[Products] Remove Last Product')