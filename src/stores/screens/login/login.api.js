import api from "../../../axios/config";

export const getUserByUsername = (username) =>
  api.get(`/profilio?username=${username}`);
