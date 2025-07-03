import { useAppDispatch, useAppSelector }            from "../Counter-Redux/Hooks/index";
import { increment, decrement, reset, setInputValue, set } from "./Slices/Counter";

const RE_counter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);

  console.log("Counter State:", counter);

  return (
    <div>
      <header
        className=" text-4xl text-blue-500 pb-10"
        style={{
          textShadow:
            "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
        }}
      >
        Counter made with Redux
      </header>
      <h1>Hello {counter.name} the Redux Count is <span className="font-bold text-2xl text-green-600">{counter.count}</span></h1>
      <div className="flex flex-col gap-10 py-10">
        <div className=" flex justify-center items-center gap-10">
          <button 
            onClick={() => dispatch(increment())}
            className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600 transition-colors"
          >
            Increment
          </button>
          <button 
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-red-600 transition-colors"
          >
            Decrement
          </button>
          <button 
            onClick={() => dispatch(reset())}
            className="bg-gray-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          <div className="flex items-center gap-2">
            <input
              type="text"
              
              className="border rounded px-2 py-1 w-20"
              placeholder="Number"
              value={counter.inputValue ?? ""}
              onChange={e =>
                dispatch({
                  type: "counter/setInputValue",
                  payload: e.target.value === "" ? "" : Number(e.target.value),
                })
              }
            />
            <button
              onClick={() => dispatch(increment(counter.inputValue || 0))}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
              disabled={!counter.inputValue && counter.inputValue !== 0}
            >
              + Increment
            </button>
            <button
              onClick={() => dispatch(decrement(counter.inputValue || 0))}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors"
              disabled={!counter.inputValue && counter.inputValue !== 0}
            >
              - Decrement
            </button>
            <button
              onClick={() => dispatch({ type: "counter/set", payload: counter.inputValue || 0 })}
              className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition-colors"
              disabled={!counter.inputValue && counter.inputValue !== 0}
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
