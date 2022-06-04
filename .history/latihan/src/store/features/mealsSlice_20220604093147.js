import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMeals = createAsyncThunk("meals/getMeals")