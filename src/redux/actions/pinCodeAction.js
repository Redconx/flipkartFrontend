import axios from "axios";
import * as actionTypes from "../constatnts/pinCodeConstant";
import { URL } from "../../utils/common-utils";



export const getPincodes = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/getPincodes`);
    
      dispatch({ type: actionTypes.GET_PINCODES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.GET_PINCODES_FAIL, payload: error.message });
    }
  };