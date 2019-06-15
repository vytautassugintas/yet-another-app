import React, { useContext, useState } from 'react';
import {
  changeView,
  removeIngredient,
  updateMeal,
} from '../shared/state/actions';
import { viewLabels } from '../shared/constants';
import { AppContext } from '../App';
import { EntryButton, Button, Input, Modal } from '../shared';
import { getFoodById, modifyMacros, calculateTotals } from '../shared/foods';
import { copy } from '../shared/copy';
import { FoodItem } from './FoodItem';
import { FoodMacros } from './FoodMacros';

import './CreateMeal.scss';

export default function CreateMeal() {
  const {
    dispatch,
    state: { selectedIngredients },
  } = useContext(AppContext);

  const [title, setTitle] = useState('');
  const [showModal, setShowModal] = useState(false);

  const hasIngredients = !!selectedIngredients.length;

  const ingredients = hasIngredients
    ? selectedIngredients.map(({ id, grams }) => {
        const food = getFoodById(id);
        return modifyMacros(food, grams);
      })
    : [];

  function openCreateModal() {
    setShowModal(true);
  }

  function handleCreateClick() {
    dispatch(updateMeal({ title, updateType: 'create' }));
    dispatch(
      changeView({
        view: viewLabels.FOOD,
        meta: {
          prevView: viewLabels.FOOD_CREATE_MEAL,
        },
      })
    );
  }

  function handleClearClick(id) {
    dispatch(removeIngredient({ id }));
  }

  const totals = calculateTotals(ingredients);

  return (
    <div>
      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <div className="Modal__body">
          <Input
            placeholder="Meal Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <div className="CreateMeal__totals">
            <b>{copy.totals}</b>
            <FoodMacros macros={totals.macros} kcal={totals.kcal} />
          </div>
          <Button onClick={handleCreateClick} label="Create" />
        </div>
      </Modal>
      {hasIngredients && (
        <div className="CreateMeal__totals">
          <b>{copy.totals}</b>
          <FoodMacros macros={totals.macros} kcal={totals.kcal} />
        </div>
      )}
      <div>
        {hasIngredients ? (
          <b>{copy.selectedIngredients}</b>
        ) : (
          copy.noSelectedIngredients
        )}
        {ingredients.map(ingredient => (
          <FoodItem
            key={ingredient.id}
            food={ingredient}
            grams={ingredient.grams}
            onClearClick={() => handleClearClick(ingredient.id)}
            clearable
          />
        ))}
      </div>
      <EntryButton
        usePlus
        label={copy.addIngredient}
        onClick={() =>
          dispatch(
            changeView({
              view: viewLabels.FOOD_LIST,
              meta: {
                prevView: viewLabels.FOOD_CREATE_MEAL,
              },
            })
          )
        }
      />
      {hasIngredients && (
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            left: 0,
            bottom: 80,
            width: '100%',
            backgroundColor: '#ffffff',
          }}
        >
          <Button block label={copy.create} onClick={openCreateModal} />
        </div>
      )}
    </div>
  );
}
