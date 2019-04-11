import React, { useState, useContext } from "react";
import { Input, Button } from "../shared";
import { AppContext } from "../App";
import { updateLog } from "../shared/state/actions";
import { generateAlmostUniqueId } from "../shared/helpers/generateUniqueID";

import "./LogContainer.scss";

export default function LogContainer() {
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
    <div>
      <form onSubmit={submit}>
        <Input
          label="Entry"
          value={inputValue}
          onChange={e => updateInputValue(e.target.value)}
        />
        <Button type="submit" label="+ Add" />
      </form>
      <div>
        {logs.map(l => (
          <div className="log" key={l.id}>
            {l.entry}{" "}
            <span className="log__display-date">
              {new Date(l.dateAdded).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
