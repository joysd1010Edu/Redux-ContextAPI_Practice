import useCounterStore from "./Store";

const RE_counter = () => {
  // ✅ Optimized selectors - separate subscriptions for better performance
  const count = useCounterStore((state) => state.count);
  const name = useCounterStore((state) => state.name);
  const inputValue = useCounterStore((state) => state.inputValue);
  
  // Actions (these don't change, so safe to destructure)
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const setInputValue = useCounterStore((state) => state.setInputValue);
  const setCount = useCounterStore((state) => state.setCount);

  console.log("Zustand Counter State:", { count, name, inputValue });

  return (
    <div>
      <header
        className=" text-4xl text-green-300 pb-10"
        style={{
          textShadow:
            "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
        }}
      >
        Counter made with Zustand
      </header>
      <h1>Hello {name} the Zustand Count is <span className="font-bold text-2xl text-green-600">{count}</span></h1>
      <div className="flex flex-col gap-10 py-10">
        <div className=" flex justify-center items-center gap-10">
          <button 
            onClick={() => increment()}
            className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600 transition-colors"
          >
            Increment
          </button>
          <button 
            onClick={() => decrement()}
            className="bg-red-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-red-600 transition-colors"
          >
            Decrement
          </button>
          <button 
            onClick={() => reset()}
            className="bg-gray-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="border rounded px-2 py-1 w-20"
              placeholder="Number"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <button
              onClick={() => increment(Number(inputValue) || 1)}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
              disabled={inputValue === "" || isNaN(Number(inputValue))}
            >
              + Increment
            </button>
            <button
              onClick={() => decrement(Number(inputValue) || 1)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors"
              disabled={inputValue === "" || isNaN(Number(inputValue))}
            >
              - Decrement
            </button>
            <button
              onClick={() => setCount(Number(inputValue) || 0)}
              className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition-colors"
              disabled={inputValue === "" || isNaN(Number(inputValue))}
            >
              Set
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RE_counter;
