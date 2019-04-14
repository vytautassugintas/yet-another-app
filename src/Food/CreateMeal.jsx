import React, { useContext } from "react";
import { changeView, addIngredient } from "../shared/state/actions";
import { viewLabels } from "../shared/constants";
import { AppContext } from "../App";
import { EntryButton, Button } from "../shared";
import { getFoodById, modifyMacros, calculateTotals } from "../shared/foods";
import { FoodItem } from "./FoodItem";
import { FoodMacros } from "./FoodMacros";

export default function CreateMeal() {
  const {
    dispatch,
    state: { selectedIngredients }
  } = useContext(AppContext);

  const hasIngredients = !!selectedIngredients.length;

  const ingredients = hasIngredients
    ? selectedIngredients.map(({ id, grams }) => {
        const food = getFoodById(id);
        return modifyMacros(food, grams);
      })
    : [];

  function onCreateClick() {
    dispatch(addIngredient({ clear: true }));
  }

  const totals = calculateTotals(ingredients);

  return (
    <div>
      <div>
        {hasIngredients ? <b>Selected ingredients</b> : "No ingredients"}
        {ingredients.map(ingredient => {
          return (
            <FoodItem
              key={ingredient.id}
              food={ingredient}
              grams={ingredient.grams}
            />
          );
        })}
      </div>
      <EntryButton
        usePlus
        label="Add ingredient"
        onClick={() =>
          dispatch(
            changeView({
              view: viewLabels.FOOD_LIST,
              meta: {
                prevView: viewLabels.FOOD_CREATE_MEAL
              }
            })
          )
        }
      />
      {hasIngredients && (
        <div>
          <b>Totals</b>
          <FoodMacros macros={totals.macros} kcal={totals.kcal} />
        </div>
      )}
      {hasIngredients && (
        <div
          style={{
            display: "flex",
            position: "fixed",
            left: 0,
            bottom: 80,
            width: "100%",
            backgroundColor: "#ffffff"
          }}
        >
          <Button block label="create" onClick={onCreateClick} />
        </div>
      )}
    </div>
  );
}
