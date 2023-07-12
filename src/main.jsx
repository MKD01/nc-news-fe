import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "./contexts/QueryContext";
import "./styles/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryProvider>
);
