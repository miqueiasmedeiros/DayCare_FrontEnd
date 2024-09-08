import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `${token}`;
};

export const createSession = async (username, password) =>
  api.post("/login", { username, password });

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
