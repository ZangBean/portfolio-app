export const selectLogin = (state) => state.login;
export const selectUser = (state) => state.login.currentUser?.user || null;
export const selectToken = (state) => state.login.currentUser?.token || null;
export const selectLoading = (state) => state.login.status === "loading";
export const selectError = (state) => state.login.error;
export const selectUsers = (state) => state.user.data;
export const selectSelectedUser = (state) => state.user.selectedUser;
