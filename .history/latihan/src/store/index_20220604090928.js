import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../store/features/todoSlice";

export default configureStore({
  reducer: {
    Todos: TodoReducer,
  },
});
