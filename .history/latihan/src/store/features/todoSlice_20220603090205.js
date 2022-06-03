import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const todoSlice = createSlice('todos/getTodos', async() => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        
    })
})