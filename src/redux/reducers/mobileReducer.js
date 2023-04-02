import * as actionType from "../constatnts/mobileConstant";

export const getMobilesReducer = (state = { mobiles: [] }, action) => {
  
    switch (action.type) {
      case actionType.GET_MOBILE_REQUEST:
        return {loading1:true,mobiles:[]}
      case actionType.GET_MOBILE_SUCCESS:
        return { loading1:false, mobiles: action.payload };
      case actionType.GET_MOBILE_FAIL:
        return { loading1:false, error: action.payload };
      default:
        return state;
    }
  };

  export const getMobileDetailsReducer = (state = { mobile1: {} }, action) => {
  
    switch (action.type) {
  
      case actionType.GET_MOBILE_DETAILS_REQUEST:
        return { loading1: true };
  
      case actionType.GET_MOBILE_DETAILS_SUCCESS:
        return { loading1: false, mobile1: action.payload };
  
      case actionType.GET_MOBILE_DETAILS_FAIL:
        return { loading1: false, mobile1: action.payload };
  
      case actionType.GET_MOBILE_DETAILS_RESET:
        return { mobile1: {} };
  
      default:
        return state;
    }
  };