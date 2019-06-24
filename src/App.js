/** @jsx jsx */
import Report from "./views/monthly-report";
import { jsx, Global } from "@emotion/core";
import Categorize from "./views/categorize";
import { Router } from "@reach/router";
import Home from "./views/home";
import AddComponent from "./components/add";

function App() {
  return (
    <div>
      <Global
        styles={{
          body: {
            padding: "0",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      />
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
