import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: API,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `${token}`;
};

export const createSession = async (username, password) =>
  api.post("/login", { username, password });

export const getProducts = async () => {
  try {
    const response = await api.get("/produtos");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching produtos:", error);
    throw error;
  }
};

// export const getInventory = async (token) =>
//   api.get("/inventory", {
//     headers: {
//       Authorization: token,
//     },
//   });

// export const registerInventory = async (data) =>
//   api.post("/inventory", { data });

// export const apiEditInventory = async (data) => {
//   api.put("/inventory", data);
// };

// export const apiDeleteInventory = async (id) => {
//   api.delete("/inventory", {
//     data: {
//       id,
//     },
//   });
// };

// export const apiSellInventory = async (data) => {
//   api.post("/sell", data);
// };
