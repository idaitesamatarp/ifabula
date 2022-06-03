import { configureStore } from "@reduxjs/toolkit";
import { To } from "./features/todoSlice"; 

export default configureStore({
  Todo: todoReducer,
});
