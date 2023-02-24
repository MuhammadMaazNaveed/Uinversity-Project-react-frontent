import axios from "axios";
export const getCategorys = async () => {
  const response = await axios.get("/api/category");
  return response;
};
