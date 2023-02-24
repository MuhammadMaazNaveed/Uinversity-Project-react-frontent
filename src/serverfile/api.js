import axios from "axios";
const URL = "http://localhost:8000/api/user";
const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/create`, data);
  } catch (error) {
    console.log(error);
  }
};
const getUser = async (data) => {
  try {
    return await axios.get(`${URL}/all`, data);
  } catch (error) {
    console.log(error);
  }
};

export default {
  addUser,
  getUser,
};
