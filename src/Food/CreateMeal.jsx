import React, { useContext, useState } from "react";
import {
  changeView,
  removeIngredient,
  updateMeal
} from "../shared/state/actions";
import { viewLabels } from "../shared/constants";
import { AppContext } from "../App";
import { EntryButton, Button, Input, Modal } from "../shared";
import { getFoodById, modifyMacros, calculateTotals } from "../shared/foods";
import { FoodItem } from "./FoodItem";
import { FoodMacros } from "./FoodMacros";

import "./CreateMeal.scss";

export default function CreateMeal() {
  const {
    dispatch,
    state: { selectedIngredients, meals }
  } = useContext(AppContext);

  const [title, setTitle] = useState("");
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
    dispatch(updateMeal({ title, updateType: "create" }));
    setShowModal(false);
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
            <b>Totals</b>
            <FoodMacros macros={totals.macros} kcal={totals.kcal} />
          </div>
          <Button onClick={handleCreateClick} label="Create" />
        </div>
      </Modal>
      {hasIngredients && (
        <div className="CreateMeal__totals">
          <b>Totals</b>
          <FoodMacros macros={totals.macros} kcal={totals.kcal} />
        </div>
      )}
      <div>
        {hasIngredients ? <b>Selected ingredients</b> : "No ingredients"}
        {ingredients.map(ingredient => {
          return (
            <FoodItem
              key={ingredient.id}
              food={ingredient}
              grams={ingredient.grams}
              onClearClick={() => handleClearClick(ingredient.id)}
              clearable
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
          <Button block label="create" onClick={openCreateModal} />
        </div>
      )}
    </div>
  );
}
