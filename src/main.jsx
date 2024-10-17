import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./styles/style.scss";
import { UserProvider } from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);
