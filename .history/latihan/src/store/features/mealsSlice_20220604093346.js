import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMeals = createAsyncThunk("meals/getMeals", async () => {
  return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
    .then((res) => res.json())
    .catch((err) => {
      console.log("err", err);
    });
});
