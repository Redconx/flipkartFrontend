import axios from "axios";
import * as actiontype from "../constatnts/cartConstant";
import { URL } from "../../utils/common-utils";



export const addToCart = (id, quantity,type) => async (dispatch) => {
  
  try {

    dispatch({ type: actiontype.ADD_TO_CART_REQUEST });

    if(type==='mobile'){

      const { data } = await axios.get(`${URL}/mobile/${id}`);
        
        let data1={}
        data1.id=data.id
        data1.url=data.img
        data1.title={ shortTitle: data.category,longTitle:data.name}
        data1.price={ mrp: data.prevPrice,
          cost: data.price,
          discount: data.discount+'%',}
        data1.description=data.details.join(",")

      dispatch({ type: actiontype.ADD_TO_CART, payload: { ...data1, quantity } });
    }
    if(type==='product'){
      const { data } = await axios.get(`${URL}/product/${id}`);
      dispatch({ type: actiontype.ADD_TO_CART, payload: { ...data, quantity } });
    }
    
  } catch (error) {
    dispatch({ type: actiontype.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const incOne=(id)=>(dispatch)=>{
  dispatch({type:actiontype.INC_ONE,payload:id})
}
export const decOne=(id)=>(dispatch)=>{
  dispatch({type:actiontype.DEC_ONE,payload:id})
}

export const removeFromCart = (id) => (dispatch) => {
  console.log(id,"in remove action")
  dispatch({ type: actiontype.REMOVE_FROM_CART, payload: id });
};
