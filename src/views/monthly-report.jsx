/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { container, header } from "../utils/monthly-css";
import { connect } from "react-redux";

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

function mapState(state) {
  return {
    wallet: state.wallet
  };
}

export default connect(mapState)(MonthlyReport);
