import React, { useState, useContext } from "react";
import { Input, Button } from "../shared";
import { AppContext } from "../App";
import { updateLog } from "../shared/state/actions";
import { generateAlmostUniqueId } from "../shared/helpers/generateUniqueID";

import "./WeightLog.scss";

const WeightLogList = ({ logs }) => (
  <div>
    {logs.map(l => (
      <div className="log" key={l.id}>
        {l.entry}
        {" kg "}
        <span className="log__display-date">
          {new Date(l.dateAdded).toLocaleTimeString()}
        </span>
      </div>
    ))}
  </div>
);

const WeightLogInputForm = () => {
  const [inputValue, updateInputValue] = useState("");
  const { dispatch } = useContext(AppContext);

  function submit(e) {
    e.preventDefault();
    dispatch(updateLog({ id: generateAlmostUniqueId(), entry: inputValue }));
    updateInputValue("");
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

export default function WeightLog() {
  const [inputValue, updateInputValue] = useState("");
  const {
    state: { logs },
    dispatch
  } = useContext(AppContext);

  function submit(e) {
    e.preventDefault();
    dispatch(updateLog({ id: generateAlmostUniqueId(), entry: inputValue }));
    updateInputValue("");
  }

  return (
    <>
      <WeightLogInputForm />
      <WeightLogList logs={logs} />
    </>
  );
}
