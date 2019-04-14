import React, { useState } from "react";

import { Input } from "../shared";

import "./FoodList.scss";

function FoodItem({ title, macros, kcal }) {
  return (
    <div className="FoodItem">
      <div className="FoodItem__title">{title}</div>
      <div className="FoodItem__macros">
        <span>Carbs {macros.carbs}</span>
        <span>Fats {macros.fats}</span>
        <span>Protein {macros.protein}</span>
        <span>per 100g</span>
        <span>{kcal} kcal</span>
      </div>
    </div>
  );
}

export function FoodList({ foods }) {
  const [searchPredicate, updateSearchPredicate] = useState("");

  function sortAlphabetically(a, b) {
    return a.title.localeCompare(b.title);
  }

  function onSearchChange(e) {
    e.preventDefault();
    updateSearchPredicate(e.target.value);
  }

  return (
    <>
      <div className="FoodList__search-bar">
        <Input
          placeholder="Search"
          value={searchPredicate}
          onChange={onSearchChange}
        />
      </div>
      {foods
        .sort(sortAlphabetically)
        .filter(f =>
          f.title.toLowerCase().includes(searchPredicate.toLowerCase())
        )
        .map(f => (
          <FoodItem key={f.id} {...f} />
        ))}
    </>
  );
}
