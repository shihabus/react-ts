import React from "react";

import Head from "./components/Head";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  const [state, setState] = React.useState(0);
  return (
    <div className="App">
      <Head title="Magic" />
      <div style={{ padding: "20px 0px" }}>{state}</div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          setState((count) => count + 1);
          console.log("Hello");
        }}
      >
        Hello
      </Button>
    </div>
  );
}

export default App;
