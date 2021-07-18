import { useRef, useContext } from "react";
import { GlobalContext } from "./globalState";
import { useClickOutside } from "./useClickOutside";

function ReducerButtons() {
  const ref = useRef<HTMLDivElement>(null!);
  const { rValue, turnOff, turnOn } = useContext(GlobalContext);

  useClickOutside(ref, () => {
    console.log("clicked outside");
  });

  return (
    <div ref={ref}>
      <h3>{rValue ? "Active" : "Inactive"}</h3>
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
    </div>
  );
}

export { ReducerButtons };
