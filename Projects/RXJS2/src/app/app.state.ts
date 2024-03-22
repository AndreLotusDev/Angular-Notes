import { Product } from "./shared/models/product-model";

export interface ProductState {
    products: Product[],
    loading: boolean;
    error: Error | null;
}

export interface AppState {
    productState: ProductState
}