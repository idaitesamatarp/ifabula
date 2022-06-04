import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMeals = createAsyncThunk("meals/getMeals", async () => {
  return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

const MealsSlice = createSlice({
  name: "Meals",
  initialState: {
    Meals: [],
  },
  extraReducers: {
    [getMeals.fulfilled]: (state, action) => {
      state.Meals = action.payload;
    },
  },
});

export default MealsSlice.reducer;
