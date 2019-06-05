import React from 'react';

import { FoodMacros } from './FoodMacros';

import './FoodItem.scss';

export function FoodItem({
  food, grams, onClick, clearable, onClearClick,
}) {
  return (
    <div className="FoodItem" onClick={onClick}>
      <div>
        <span className="FoodItem__title">{food.title}</span>
        {' '}
        {grams && `${grams} g`}
        <FoodMacros macros={food.macros} kcal={food.kcal} />
      </div>
      {clearable && (
        <div className="FoodItem__clear-btn" onClick={onClearClick}>
          <i className="material-icons">clear</i>
        </div>
      )}
    </div>
  );
}
