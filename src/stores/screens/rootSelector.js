export const selectLogin = (state) => state.login;
export const selectUser = (state) => {
  return state.login.user;
};
export const selectToken = (state) => state.login.token;
export const selectLoading = (state) => state.login.loading;
export const selectError = (state) => state.login.error;
export const selectUsers = (state) => state.user.users;
export const selectSelectedUser = (state) => state.user.selectedUser;
