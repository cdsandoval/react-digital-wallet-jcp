import React from "react";
import Report from "./views/monthly-report";
import Categorize from "./views/categorize";
import { Router } from "@reach/router";
import Home from "./views/home";
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
