import React, { useState, useContext } from 'react';
import { Input, Button, Modal } from '../shared';
import { foods, getFoodById, modifyMacros } from '../shared/foods';
import { changeView, addIngredient } from '../shared/state/actions';
import { viewLabels } from '../shared/constants';
import { AppContext } from '../App';
import { FoodItem } from './FoodItem';

import './FoodList.scss';

export default function FoodList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [grams, setGrams] = useState(100);
  const selectedFood = getFoodById(selectedId);

  const {
    dispatch,
    state: { meta: viewMeta },
  } = useContext(AppContext);
  const [searchPredicate, updateSearchPredicate] = useState('');

  function onSelect(id) {
    if (viewMeta && viewMeta.prevView === viewLabels.FOOD_CREATE_MEAL) {
      setSelectedId(id);
      setShowModal(true);
    }
  }

  function sortAlphabetically(a, b) {
    return a.title.localeCompare(b.title);
  }

  function onGramsChange(e) {
    e.preventDefault();
    setGrams(e.target.value);
  }

  function onAddClick() {
    dispatch(addIngredient({ id: selectedId, grams }));
    dispatch(changeView({ view: viewMeta.prevView }));
  }

  function onSearchChange(e) {
    e.preventDefault();
    updateSearchPredicate(e.target.value);
  }

  return (
    <>
      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        {selectedFood && (
          <div className="Modal__body">
            <FoodItem food={modifyMacros(selectedFood, grams)} />
            <Input
              placeholder="Grams"
              rightLabel="g"
              value={grams}
              onChange={onGramsChange}
            />
            <Button onClick={onAddClick} label="Add" />
          </div>
        )}
      </Modal>
      <div className="FoodList__search-bar">
        <Input
          placeholder="Search"
          value={searchPredicate}
          onChange={onSearchChange}
        />
      </div>
      {foods
        .sort(sortAlphabetically)
        .filter(f => f.title.toLowerCase().includes(searchPredicate.toLowerCase()))
        .map(f => (
          <FoodItem onClick={() => onSelect(f.id)} key={f.id} food={f} />
        ))}
    </>
  );
}
