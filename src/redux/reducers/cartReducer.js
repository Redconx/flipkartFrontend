import * as actionType from '../constatnts/cartConstant'

export const cartReducer=(state={cartItems:[]},action)=>{
    
    switch(action.type){
        case actionType.ADD_TO_CART_REQUEST:
            return {...state, loading:true}
        case actionType.ADD_TO_CART:
            const item=action.payload;
            const exist=state.cartItems.find(prod=>prod.id===item.id)
            if(exist){
                return {...state,cartItems:state.cartItems.map(data=>data.id===exist.id ? {...data,quantity:data.quantity+1}:data),loading:false}
            }else{
                return {...state,cartItems:[...state.cartItems,item] ,loading:false }
            }
        case actionType.INC_ONE:
            return {...state,cartItems:state.cartItems.map(data=>data.id===action.payload ? {...data,quantity:data.quantity+1}:data)}
        case actionType.DEC_ONE:
            const prod=state.cartItems.find(ele=>ele.id===action.payload)
            if(prod.quantity<=1){
                return {...state,cartItems:state.cartItems.filter(item=>item.id!==action.payload)}
            }else{
                return {...state,cartItems:state.cartItems.map(item=>item.id===action.payload?{...item,quantity:item.quantity-1}:item)}
            }
        case actionType.REMOVE_FROM_CART:
            return {...state,cartItems:state.cartItems.filter(prod=>prod.id!==action.payload)}
        default:
            return state
    }
}