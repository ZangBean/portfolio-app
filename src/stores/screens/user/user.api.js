import api from "../../../axios/config";

export const fetchUsers = () => api.get("/profilio");
export const getUserById = (id) => api.get(`/profilio/${id}`);
export const getUserByUsername = (username) =>
  api.get(`/profilio?username=${username}`);
export const createUser = (data) => api.post("/profilio", data);
export const updateUser = (id, data) => api.put(`/profilio/${id}`, data);
export const deleteUser = (id) => api.delete(`/profilio/${id}`);
