import TYPES from "./actions";
import { initialState } from "./initialState";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const newItem = state.products.find(
        (product) => product.id === action.payload,
      );

      const isItemInCart = state.cart.find((item) => item.id === newItem.id);

      return isItemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_ITEM: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload,
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDelete.id
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== itemToDelete.id),
          };
    }
    case TYPES.REMOVE_ALL_ITEMS: {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          }
    }
    case TYPES.CLEAR_CART: {
        return initialState
    }

    default:
      return state;
  }
};
