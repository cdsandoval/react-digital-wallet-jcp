/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";

import Button from "../components/button";

function Home(props) {
  React.useState(() => {
    console.log(props.wallet);
  });
  return (
    <>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#eee",
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

      <div>
        <table css={{ textAlign: "center", margin: "30px auto" }}>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          {Object.values(props.wallet).map(wallet => {
            return (
              <tr>
                <td>{wallet.category}</td>
                <td>
                  {wallet.type ? `+ ${wallet.amount}` : `- ${wallet.amount}`}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div css={{ textAlign: "center" }}>
        <Button path="/add" color="#58b368">
          Add
        </Button>
        <Button path="/report" color="#009975">
          Report
        </Button>
        <Button path="/report/idMonth" color="#d9d872">
          Report of the Month
        </Button>
      </div>
    </>
  );
}

function mapState(state) {
  return {
    wallet: state.wallet
  };
}

export default connect(
  mapState,
  null
)(Home);
