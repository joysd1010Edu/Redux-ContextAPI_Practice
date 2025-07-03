import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterProvider } from "./Counter-Context/CounterContext.jsx";
import { Provider } from "react-redux";
import { store } from "./Counter-Redux/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CounterProvider>
      <App />
    </CounterProvider>
  </Provider>
);