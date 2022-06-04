import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

const TodoSlice = createSlice({
  name: "Todos",
  initialState: {
    Todos: [],
    loading: false,
  },
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.loading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.Todos = {action.payload};
    },
    [getTodos.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default TodoSlice.reducer;
