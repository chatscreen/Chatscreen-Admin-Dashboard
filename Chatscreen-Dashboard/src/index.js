import React from "react";
import ReactDOM from "react-dom/client";

//basic global styles
import "./index.css";

//fonts used in app
import "./fonts/Fonts.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
