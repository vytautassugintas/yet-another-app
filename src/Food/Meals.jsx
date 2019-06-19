import React, { useContext } from 'react';
import { AppContext } from '../App';
import { getFoodById, modifyMacros, calculateTotals } from '../shared/foods';
import { FoodMacros } from './FoodMacros';

import './Meals.scss';

export default function Meals() {
  const {
    state: { meals },
  } = useContext(AppContext);

  if (!meals.length) {
    return 'No meals yet! Go and create one';
  }

  return (
    <div>
      {meals.map(meal => {
        const ingredients = meal.ingredients.map(({ id, grams }) => {
          const food = getFoodById(id);
          return modifyMacros(food, grams);
        });

        const totals = calculateTotals(ingredients);
        console.log(ingredients, totals);

        return (
          <div key={meal.id}>
            <div className="Meals__title">
              {meal.title} | {totals.grams} g
            </div>
            <FoodMacros macros={totals.macros} kcal={totals.kcal} />
          </div>
        );
      })}
    </div>
  );
}
