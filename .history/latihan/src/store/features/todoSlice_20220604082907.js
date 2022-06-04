import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = create

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
