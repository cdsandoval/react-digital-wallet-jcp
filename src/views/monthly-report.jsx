/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { container, header } from "../utils/monthly-css";
import { connect } from "react-redux";
import { Link } from "@reach/router";

function MonthlyReport(props) {
  const [deposit, setDeposit] = React.useState(0);
  const [withdraw, setWithdraw] = React.useState(0);

  React.useEffect(() => {
    setDeposit(filter(1, getMonth()));
    setWithdraw(filter(0, getMonth()));
  }, [deposit, withdraw]);

  function filter(type, month) {
    let result = props.wallet
      .filter(value => value.month === month && value.type === type)
      .reduce((total, value) => total + value.amount, 0);
    return result;
  }

  function getMonth() {
    const date = new Date();
    return date.toLocaleDateString("en-us", { month: "long" });
  }

  return (
    <>
      <div css={container}>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#eee",
            borderBottom: "2px solid black",
            padding: "10px",
            width: "300px"
          }}
        >
          <h2
            css={{
              fontFamily: "Arial, Helvetica, sans-serif",
              alignSelf: "center"
            }}
          >
            My wallet
          </h2>
          <img
            css={{
              alignSelf: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "black"
            }}
            src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
            alt="Show user face"
          />
        </div>
        <p css={header}>Saldo: {props.total}</p>
        <div>
          <p>Deposit: {deposit}</p>
          <p>Withdraw: {withdraw}</p>
        </div>
        <Link to="/">
          <button
            css={{
              borderRadius: "5px",
              padding: "7px",
              margin: "10px",
              backgroundColor: "#58b368",
              border: "2px solid black",
              cursor: "pointer",
              ":hover": {
                backgroundColor: "#eee"
              }
            }}
          >
            BACK
          </button>
        </Link>
      </div>
    </>
  );
}

function mapState(state) {
  const arrayWallet = Object.values(state.wallet);
  let total = 0;

  total = arrayWallet.reduce((ac, value) => {
    if (value.type === 1) {
      return ac + value.amount;
    }
    return ac - value.amount;
  }, 0);

  return {
    wallet: Object.values(state.wallet),
    total: total
  };
}

export default connect(mapState)(MonthlyReport);
