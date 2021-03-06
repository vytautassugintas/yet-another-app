import React, { useState, useContext } from 'react';
import { AppContext } from '../../App';
import { Input, Button } from '../../shared';
import { updateLog } from '../../shared/state/actions';
import { uid } from '../../shared/helpers/uid';

export const WeightLogInputForm = ({ logs }) => {
  const [inputValue, updateInputValue] = useState('');
  const { dispatch } = useContext(AppContext);

  function submit(e) {
    e.preventDefault();
    dispatch(updateLog({ id: uid(), entry: inputValue }));
    updateInputValue('');
  }

  return (
    <form onSubmit={submit}>
      <Input
        label="Entry"
        value={inputValue}
        onChange={e => updateInputValue(e.target.value)}
        rightLabel="kg"
      />
      <Button type="submit" label="+ Add" />
    </form>
  );
};
