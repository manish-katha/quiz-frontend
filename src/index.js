import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const server = "https://quiz-backend-ednf.onrender.com/api/v1";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
