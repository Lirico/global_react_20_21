import TYPES from "./actions";



export const reducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: { console.log(action.payload) }
        case TYPES.REMOVE_ONE_ITEM: { }
        case TYPES.REMOVE_ALL_ITEMS: { }
        case TYPES.CLEAR_CART: { }

        default:
            return state;
    }
}


// Vite
// Parcel


