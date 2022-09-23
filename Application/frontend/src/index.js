import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PlaylistsContextProvider } from "./context/PlaylistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PlaylistsContextProvider>
    <App />
  </PlaylistsContextProvider>
);
