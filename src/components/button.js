/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Router } from "@reach/router";

function Button({ path, children }) {
  return (
    <Router>
      <button path={path}>{children}</button>
    </Router>
  );
}

export default Button;
