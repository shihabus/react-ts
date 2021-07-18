import React, { useState, useRef } from "react";

export function Input() {
  // useState types are inferred based on default value
  const [name, setName] = useState("");

  // Make the ref READ_ONLY
  const ref = useRef<HTMLInputElement>(null!);

  return (
    <input ref={ref} value={name} onChange={(e) => setName(e.target.value)} />
  );
}
