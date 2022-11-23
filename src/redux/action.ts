import { Products } from "../utils/model";
import { ProductState } from "./reducer";

export function addProductToCart(product: ProductState) {
  return {
    type: "ADD_TO_CART" as const,
    payload: product,
  };
}

export function deleteProductInCart(id: number) {
  return {
    type: "DELETE_PRODUCT_IN_CART" as const,
    payload: id,
  };
}

export function incrementQuantity(id: number) {
  return {
    type: "INCREMENT_QUANTITY" as const,
    payload: id,
  };
}

export function decrementQuantity(id: number) {
    return {
        type: "DECREMENT_QUANTITY" as const,
        payload: id,
    };
    }

export type addProductAction = ReturnType<typeof addProductToCart>;
export type deleteProductAction = ReturnType<typeof deleteProductInCart>;
export type incrementQuantityAction = ReturnType<typeof incrementQuantity>;
export type decrementQuantityAction = ReturnType<typeof decrementQuantity>;

export type ProductAction = addProductAction | deleteProductAction | incrementQuantityAction | decrementQuantityAction;