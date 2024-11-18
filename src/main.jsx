import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./reduxToolkit/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer position="top-center" />
    <App />
  </Provider>
);
