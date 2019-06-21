import React from "react";
import Report from "./components/monthly-report";
import Categorize from "./components/categorize";
import { Router } from "@reach/router";
import Home from "./views/home";
import Report from "./components/monthly-report";
import Categorize from "./components/categorize";
import AddComponent from "./components/add";

function App() {
  return (
    <div>
      <Router>
        <Report path="/report" />
        <Home path="/" />
        <Categorize path="/categorize" />
        <AddComponent path="/add" />
      </Router>
    </div>
  );
}

export default App;
