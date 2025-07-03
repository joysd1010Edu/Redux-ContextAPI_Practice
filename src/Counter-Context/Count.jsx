import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Count = () => {
  const Context = useContext(CounterContext);
  console.log(Context);
  return (
    <div>
      <header
        className=" text-4xl text-yellow-500 pb-10"
        style={{
          textShadow:
            "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
        }}
      >
        Counter made with Context API
      </header>
      Hello {Context.name}, the count is <span className=" font-bold text-2xl"> {Context.count}</span>
      <button
        onClick={() => Context.setCount(Context.count + 1)}
        className=" px-3 py-2 border-2 mx-3 rounded-2xl"
      >
        Increment
      </button>
      <button
        onClick={() => Context.setCount(Context.count - 1)}
        className=" px-3 py-2 border-2 mx-3 rounded-2xl"
      >
        Decrement
      </button>
      <button
        onClick={() => Context.setCount(0)}
        className=" px-3 py-2 border-2 mx-3 rounded-2xl"
      >
        Reset
      </button>
    </div>
  );
};

export default Count;
