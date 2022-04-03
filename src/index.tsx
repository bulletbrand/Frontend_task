import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ErrorBoundary } from "./components";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
