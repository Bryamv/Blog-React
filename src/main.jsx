import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Blog from "./components/Blog";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>
);