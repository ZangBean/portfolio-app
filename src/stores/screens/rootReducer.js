import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login/login.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
});

export default rootReducer;
