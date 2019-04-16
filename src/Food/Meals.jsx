import React, { useContext } from "react";
import { AppContext } from "../App";
import { getFoodById, modifyMacros, calculateTotals } from "../shared/foods";
import { FoodMacros } from "./FoodMacros";

export default function Meals() {
  const {
    state: { meals }
  } = useContext(AppContext);

  return (
    <div>
      {meals.map(meal => {
        const ingredients = meal.ingredients.map(({ id, grams }) => {
          const food = getFoodById(id);
          return modifyMacros(food, grams);
        });

        const totals = calculateTotals(ingredients);

        return (
          <div key={meal.id}>
            <div>{meal.title}</div>
            <FoodMacros macros={totals.macros} kcal={totals.kcal} />
          </div>
        );
      })}
    </div>
  );
}
