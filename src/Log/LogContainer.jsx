import React, { useState, useContext } from "react";
import { Input, Button } from "../shared";
import { AppContext } from "../App";
import { updateLog } from "../shared/state/actions";
import { generateAlmostUniqueId } from "../shared/helpers/generateUniqueID";

export default function LogContainer() {
  const [state, updateState] = useState("");
  const {
    state: { logs },
    dispatch
  } = useContext(AppContext);

  function submit(e) {
    e.preventDefault();
    dispatch(updateLog({ id: generateAlmostUniqueId(), entry: state }));
    updateState("");
  }

  return (
    <div>
      <form onSubmit={submit}>
        <Input
          label="Entry"
          value={state}
          onChange={e => updateState(e.target.value)}
        />
        <Button type="submit" label="+ Add" />
      </form>
      <div>
        {logs.map(l => (
          <p key={l.id}>{l.entry}</p>
        ))}
      </div>
    </div>
  );
}
