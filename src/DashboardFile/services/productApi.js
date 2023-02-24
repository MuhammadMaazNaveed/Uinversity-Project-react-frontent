import axios from "axios";
const URL = "http://localhost:8000/api/user";
export const addProduct = async (data) => {
  try {
    return await axios.post(`${URL}/createproduct`, data);
  } catch (error) {
    console.log(error);
  }
};
export const getProducts = async (data) => {
  try {
    return await axios.get(`${URL}/allProduct`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const editProduct = async (product, id) => {
  try {
    return await axios.post(`${URL}/${id}`, product);
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
