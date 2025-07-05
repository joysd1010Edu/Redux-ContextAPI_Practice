import { create } from "zustand";
import { devtools } from "zustand/middleware";

const counterStore = (set) => ({
  count: 0,
  name: "JoySd",
  inputValue: "",
  increment: (value = 1) =>
    set((state) => ({
      count: state.count + Number(value),
    })),
  decrement: (value = 1) =>
    set((state) => ({
      count: state.count - Number(value),
    })),
  reset: () => set({ count: 0 }),
  setCount: (value) => set({ count: Number(value) }),
  setInputValue: (value) => set({ inputValue: value }),
});

const useCounterStore = create(devtools(counterStore, { name: "CounterStore" }));
export default useCounterStore;