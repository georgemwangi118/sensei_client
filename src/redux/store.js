import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { alertsSlice } from "./alertsSlice";
import { userSlice } from "./userSlice";

const rootReducer = combineReducers({
  alers: alertsSlice.reducer,
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
