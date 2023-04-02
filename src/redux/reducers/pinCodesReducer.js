import * as actionType from "../constatnts/pinCodeConstant";

export const getPincodesReducer = (state = { pincodes: [] }, action) => {
  
  switch (action.type) {
    case actionType.GET_PINCODES_SUCCESS:
      return { pincodes: action.payload };
    case actionType.GET_PINCODES_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};