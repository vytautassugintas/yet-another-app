import React from "react";

import { FoodMacros } from "./FoodMacros";

import "./FoodItem.scss";

export function FoodItem({ food, grams, onClick }) {
  return (
    <div className="FoodItem" onClick={onClick}>
      <span className="FoodItem__title">{food.title}</span>{" "}
      {grams && `${grams} g`}
      <FoodMacros macros={food.macros} kcal={food.kcal} />
    </div>
  );
}
