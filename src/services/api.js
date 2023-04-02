import axios from "axios";
import { URL } from "../utils/common-utils";

export const authenticateSignup = async (obj) => {
  try {
    return await axios.post(`${URL}/signup`, obj);
  } catch (error) {
    console.log(`Error while calling signup api`, error);
    return error.response
  }
};
export const authenticateLogin = async (obj) => {
  try {
    let response=await axios.post(`${URL}/login`, obj);
    return response
  } catch (error) {
    console.log(`Error while calling signup api`, error);
    return error.response
  }
};

export const payUsingPaytm=async (data)=>{
  try {
    let response=await axios.post(`${URL}/payment`,data)
    return response.data
  } catch (error) {
    console.log('error while calling payment API..',error.messgae)
  }
}

export const getReviews=async (id,searchStr)=>{
  try{
    let response=await axios.get(`${URL}/reviews/${id}?${searchStr}`)
    return response.data
  } catch (error) {
    console.log('error while calling review API..',error.messgae)
  }
}


