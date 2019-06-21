import React from "react";
import { Router } from "@reach/router";

import Home from "./views/home";
import Report from "./components/monthly-report";

function App() {
  return (
    <div>
      <Router>
        <Report path="/report" />
        <Home />
      </Router>
    </div>
  );
}

export default App;
