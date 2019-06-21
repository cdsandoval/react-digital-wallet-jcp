// withdraw: ["Transporte", "Comida", "Servicios basicos"],
// deposit: ["Sueldo", "Fijo"]
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { redirectTo } from "@reach/router";

function Button({ children }) {
  return <button>{children}</button>;
}

export default Button;
