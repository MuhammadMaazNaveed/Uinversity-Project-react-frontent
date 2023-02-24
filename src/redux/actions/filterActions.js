import axios from "axios";
import { GET_PRODUCT } from "../constraint/productConstraint.js";

export const getProductByfilter = (arg) => async (dispatch) => {
  try {
    const response = await axios.post("/product", arg);
    dispatch({
      type: GET_PRODUCT,
      payload: response.data.products,
    });
  } catch (error) {
    console.log("getProduct api error: ", error);
    // dispatch({ type: STOP_LOADING });
    // dispatch({
    //   type: SHOW_ERROR_MESSAGE,
    //   payload: error.response.data.errorMessage,
    // });
  }
};
