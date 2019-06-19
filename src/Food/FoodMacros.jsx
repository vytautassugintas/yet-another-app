import React from 'react';

import './FoodMacros.scss';

export function FoodMacros({ macros, kcal }) {
  return (
    <div className="FoodMacros">
      <span>Carbs {macros.carbs.toFixed(1)}</span>
      <span>Fats {macros.fats.toFixed(1)}</span>
      <span>Protein {macros.protein.toFixed(1)}</span>
      <span className="FoodMacros__kcal">{kcal.toFixed(1)} kcal</span>
    </div>
  );
}
