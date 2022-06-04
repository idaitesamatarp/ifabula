import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
});

const TodoSlice = createSlice(({
  name: 'Todos',
  initialState: {
    Todo: 
  }
}));
