import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/todoSlice";

export default configureStore({
  reducer: {
    Todos: TodoReducer,
  },
});
