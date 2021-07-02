import { ActionTypes } from "../contants/action_types"

export const setProducts = (products) =>{

    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (products) =>{
        return{
            type: ActionTypes.SELECTED_PRODUCTS,
            payload: products,
        }
}

export const removeselectedProduct = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}
