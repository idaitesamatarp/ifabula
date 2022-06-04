import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./features/todoSlice";
import MealsReducer from "./features/mealsSlice"

export default configureStore({
  reducer: {
    Todos: TodoReducer,
  },
});
