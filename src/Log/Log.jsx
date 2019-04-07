import React, { useState } from "react";
import { Input } from "../shared/Input";
import { Button } from "../shared/Button";

export function Log() {
  const [state, updateState] = useState(null);
  const [log, updateLog] = useState([]);

  function submit(e) {
    e.preventDefault();
    updateLog([...log, state]);
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
        {log.map(entry => (
          <p>{entry}</p>
        ))}
      </div>
    </div>
  );
}
