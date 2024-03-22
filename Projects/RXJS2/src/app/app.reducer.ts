import { createReducer, on } from "@ngrx/store";
import { ProductState } from "./app.state";
import { addProducts, finishLoad, loadProducts, removeLastProduct, removeProducts } from "./app.action";

export const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
}

export const productReducer = createReducer(
    initialState,
    on(addProducts, (state, action) => {
        return {
            ...state,
            products: [...state.products, action]
        }
    }),
    on(removeProducts, (state, action) => {
        return {
            ...state,
            products: state.products.filter(product => product.id !== action.productId)
        }
    }),
    on(loadProducts, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(finishLoad, (state) => {
        return {
            ...state,
            loading: false
        }
    }),
    on(removeLastProduct, (state) => {
        return {
            ...state,
            products: state.products.slice(0, -1)
        }
    })
)