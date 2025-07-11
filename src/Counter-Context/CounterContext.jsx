import { createContext, useState } from "react";

export const CounterContext = createContext(null);
export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count:count, name:"joysd", setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};
