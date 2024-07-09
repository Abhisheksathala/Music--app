import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Playercontectprovider from "./Context/Playercontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Playercontectprovider>

      <App />
    </Playercontectprovider>
    </BrowserRouter>
  </React.StrictMode>
);
