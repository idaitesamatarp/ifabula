import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMeals } from "../store/features/mealsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function About() {
  let dispatch = useDispatch();

  const { Meals } = useSelector((state) => state.Meals);
  // console.log('Meals', Meals)

  useEffect(() => {
    dispatch(getMeals());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <div>About</div>
      <Link to="/" className="btn btn-danger">
        Go To Home
      </Link>
      {Meals.meals.map((meal) => {
        return (
          <div className="text-center">
            <div className="col-3">

            </div>
          </div>
        );
      })}
    </div>
  );
}
