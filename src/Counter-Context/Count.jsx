import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Count = () => {
  const [inputValue, setInputValue] = React.useState(0);
  const Context = useContext(CounterContext);
  console.log(Context);
  return (
    <div>
      <header
        className=" text-4xl text-yellow-500 pb-2"
        style={{
          textShadow:
            "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
        }}
      >
        Counter made with Context API
      </header>
      <p className=" py-10">
        Hello {Context.name}, the count is{" "}
        <span className=" font-bold text-2xl"> {Context.count}</span>
      </p>

      <div className=" flex justify-center items-center gap-10">
        <button
          onClick={() => Context.setCount(Context.count + 1)}
          className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
        <button
          onClick={() => Context.setCount(Context.count - 1)}
          className="bg-red-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={() => Context.setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600 transition-colors"
        >
          Reset
        </button>

        <div className="flex items-center gap-2">
          <input
            type="text"
            className="border rounded px-2 py-1 w-20"
            placeholder="Number"
            value={inputValue ?? 0}
            onChange={(e) =>
              setInputValue(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
          <button
            onClick={() =>
              Context.setCount(
                inputValue ? Context.count + inputValue : Context.count + 0
              )
            }
            className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600 transition-colors"
          >
            increment
          </button>
          <button onClick={() =>
              Context.setCount(
                inputValue ? Context.count - inputValue : Context.count - 0
              )
            } className="bg-red-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-red-800 transition-colors">
            decrement
          </button>
          <button
            onClick={() => Context.set(Context.inputValue || 0)}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
            disabled={!Context.inputValue && Context.inputValue !== 0}
          >
            Set
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
