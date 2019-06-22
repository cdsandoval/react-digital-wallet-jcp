/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { container, header } from "../utils/monthly-css";
import { connect } from "react-redux";

function MonthlyReport(props) {
  const [deposit, setDeposit] = React.useState(0);
  const [withdraw, setWithdraw] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setDeposit(filter(1, getMonth()));
    setWithdraw(filter(0, getMonth()));
    setTotal(saldo());
  }, [withdraw]);

  function filter(type, month) {
    let result = props.wallet
      .filter(value => value.mes === month && value.type === type)
      .reduce((total, value) => total + value.amount, 0);
    return result;
  }

  function saldo() {
    let saldo = props.total.map(
      value => value.month == getMonth() && value.total
    );
    return saldo.toString();
  }

  function getMonth() {
    const date = new Date();
    return date.toLocaleDateString("en-us", { month: "long" });
  }

  return (
    <div css={container}>
      <p css={header}>Saldo: {total}</p>
      <div>
        <p>Deposit: {deposit}</p>
        <p>Withdraw: {withdraw}</p>
      </div>
    </div>
  );
}

function mapState(state) {
  return {
    wallet: state.wallet,
    total: state.totalMonthly
  };
}

export default connect(mapState)(MonthlyReport);
