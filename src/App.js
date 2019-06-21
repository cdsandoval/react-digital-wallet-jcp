import React from "react";
import Report from "./components/monthly-report";
import Categorize from "./components/categorize";
import { Router } from "@reach/router";
import Home from "./views/home";

function App() {
  return (
    <div>
      <Router>
        <Report path="/report" />
        <Home path="/" />
        <Categorize path="/categorize" />
      </Router>
    </div>
  );
}

export default App;
