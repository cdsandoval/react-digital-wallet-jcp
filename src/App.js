import React from "react";
import Report from "./components/monthly-report";
import AddComponent from "./components/add";
import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Router>
        <Report path="/report" />
        <AddComponent path="/add" />
      </Router>
    </div>
  );
}

export default App;
