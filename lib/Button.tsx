"use client";

import { useState } from "react";
// import style from "./Button.module.css";

// type ButtonProps = {
//   type: "primary" | "secondary";
//   size: "small" | "medium" | "large";
// };
export function Button() {
  let [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className="bg-red-500 text-white p-2 rounded-md"
    >
      Count is {count}
    </button>
  );
}
