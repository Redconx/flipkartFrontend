import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ThunkMiddleware from "redux-thunk";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import {getMobilesReducer,getMobileDetailsReducer} from './reducers/mobileReducer'
import { getPincodesReducer } from "./reducers/pinCodesReducer";

const reducer = combineReducers({
  getProductDetails: getProductDetailsReducer,
  getProducts: getProductsReducer,
  cart:cartReducer,
  getMobiles:getMobilesReducer,
  getMobileDetails:getMobileDetailsReducer,
  getPincodes:getPincodesReducer
});


const middleware = [ThunkMiddleware];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
