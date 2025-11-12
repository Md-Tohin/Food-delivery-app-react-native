import { CartAction } from "~/actions"


const initialState = {
    cartItems: [],
    isLoading: false,
}

export default (state = initialState, action) => {
    switch(key){
        case CartAction.types.ADD_TO_CART:
            return state;
        case CartAction.types.REMOVE_FROM_CART:
            return state;
        case CartAction.types.GET_CART_ITEMS:
            return {...state, cartItems: action?.payload};
        case CartAction.types.SET_IS_LOADING:
            return {...state, isLoading: action?.payload};
        default:
            return state;
    }
}