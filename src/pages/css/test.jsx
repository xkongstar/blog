import { useState } from "react";

export default function Test() {
  const [state, setState] = useState("A");
  return (
    <div>
      <button
        onClick={() => {
          console.log("1");
          setState("B");
        }}
        style={{
          width: "40px",
          backgroundColor: "red",
          display: "inline-block",
        }}
      >
        {state}
      </button>
    </div>
  );
}
