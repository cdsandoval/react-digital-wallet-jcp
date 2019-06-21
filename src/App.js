import React from "react";
import Report from "./components/monthly-report";
import { Router } from "@reach/router";

function App() {
  return (
    <div>
      <Router>
        <Report path="/report" />
      </Router>
    </div>
  );
}

export default App;
