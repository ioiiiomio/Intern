import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MusicPage from "./components/MusicPage";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MusicPage />
  </React.StrictMode>
);
