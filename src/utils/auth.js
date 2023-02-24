import client from "../api/client";
const catchError = (error) => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return { success: false, error: error.message };
};

export const signup = async (values) => {
  try {
    const { data } = await client.post("/user/create", { ...values });
    return data;
  } catch (error) {
    return catchError(error);
  }
};
export const signin = async (values) => {
  try {
    const { data } = await client.post(`/user/signin`, { ...values });
    return data;
  } catch (error) {
    return catchError(error);
  }
};
export const forgetPassword = async (email) => {
  try {
    const { data } = await client.post(`/user/forget-password`, { email });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const adminSignin = async (values) => {
  try {
    const { data } = await client.post(`/user/admin`, { ...values });
    return data;
  } catch (error) {
    return catchError(error);
  }
};
