import React, { useState } from "react";

export function Input() {
  // useState types are inferred based on default value
  const [name, setName] = useState("");

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
