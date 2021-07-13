import React from "react";

import Head from "./components/Head";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Head title="Magic" />
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log("Hello");
        }}
      />
    </div>
  );
}

export default App;
