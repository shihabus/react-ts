import React, { useReducer } from "react";
import { createContext } from "react";

const initialValues = {
  rValue: true,
  turnOn: () => {},
  turnOff: () => {},
};

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

const GlobalContext = createContext(initialValues);

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <GlobalContext.Provider
      value={{
        rValue: state.rValue,
        turnOn: () => dispatch({ type: "one" }),
        turnOff: () => dispatch({ type: "two" }),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, initialValues, GlobalProvider };
