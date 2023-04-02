import axios from "axios";
import * as actionTypes from "../constatnts/mobileConstant";
import { URL } from "../../utils/common-utils";


export const getMobiles = (searchStr) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_MOBILE_REQUEST});
      const { data } = await axios.get(`${URL}/getMobiles?${searchStr}`);
      
      dispatch({ type: actionTypes.GET_MOBILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.GET_MOBILE_FAIL, payload: error.message });
    }
  };
  
  export const getMobileDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_MOBILE_DETAILS_REQUEST }); 
      const { data } = await axios.get(`${URL}/mobile/${id}`);
      dispatch({ type: actionTypes.GET_MOBILE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_MOBILE_DETAILS_FAIL,
        payload: error.message,
      });
    }
  };