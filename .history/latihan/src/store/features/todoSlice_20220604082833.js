import { createSlice } from "@reduxjs/toolkit";

createSlice

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      res.json();
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
      state.Todos = action.payload;
    },
    [getTodos.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default TodoSlice.reducer;
