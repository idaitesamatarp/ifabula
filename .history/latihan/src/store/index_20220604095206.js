import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./features/todoSlice";
import MealReducer from "./features/mealsSlice";

export default configureStore({
  reducer: {
    Todos: TodoReducer,
    Meals: MealReducer,
  },
});
