
import { createContext, useReducer } from "react";
import { reducer } from "../reducer_cart/reducer";
import { initialState } from "../reducer_cart/initialState";
import TYPES from "@/reducer_cart/actions";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { products, cart } = state;

    const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    const removeFromCart = (id) => dispatch({ type: TYPES.REMOVE_ONE_ITEM, payload: id })
    const clearCart = () => dispatch({ type: TYPES.CLEAR_CART })

    return (
        <CartContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

