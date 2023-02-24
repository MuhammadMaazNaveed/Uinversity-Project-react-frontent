import axios from "axios";
const URL = "http://localhost:8000/api/user";
export const addEmployee = async (data) => {
  try {
    return await axios.post(`${URL}/createEmployee`, data);
  } catch (error) {
    console.log(error);
  }
};
export const getEmployees = async (data) => {
  try {
    return await axios.get(`${URL}/allEmployee`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getEmployee = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const editEmployee = async (employee, id) => {
  try {
    return await axios.post(`${URL}/${id}`, employee);
  } catch (error) {
    console.log(error);
  }
};
export const deleteEmployee = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
