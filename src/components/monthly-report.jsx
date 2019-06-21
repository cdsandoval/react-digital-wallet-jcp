/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const container = {
  textAlign: "center",
  top: "50%",
  marginTop: "-180px",
  left: "50%",
  marginLeft: "-150px",
  position: "absolute",
  border: "1px solid black"
};

const header = {
  lineHeight: "100px",
  padding: "10px 100px",
  backgroundColor: "#eee",
  verticalAlign: "middle",
  fontSize: "1.3rem",
  marginTop: "0px",
  borderBottom: "1px solid black"
};

function MonthlyReport() {
  return (
    <div css={container}>
      <p css={header}>Saldo: 3000</p>
      <div>
        <p>Ingreso: 1000</p>
        <p>Gastos: 500</p>
      </div>
    </div>
  );
}

export default MonthlyReport;
