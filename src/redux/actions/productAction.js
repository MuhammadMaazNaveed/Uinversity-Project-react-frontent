export const getProductsByCount = () => async (dispatch) => {
  try {
    const response = await axios.post("/api/product/count");
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
