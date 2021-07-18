import React, { useReducer, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

const initialState = { rValue: true };

interface State {
  rValue: boolean;
}

type Action = {
  type: "one" | "two" | "three";
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "one":
      return { rValue: true };
    case "two":
      return { rValue: false };
    default: {
      return state;
    }
  }
}

function ReducerButtons() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef<HTMLDivElement>(null!);

  useClickOutside(ref, () => {
    console.log("clicked outside");
  });

  return (
    <div ref={ref}>
      <h3>{state.rValue ? "Active" : "Inactive"}</h3>
      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
      <button onClick={() => dispatch({ type: "three" })}>Action Three</button>
    </div>
  );
}

export { ReducerButtons };
