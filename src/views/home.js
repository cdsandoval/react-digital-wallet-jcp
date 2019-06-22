/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import { FaUser } from "react-icons/fa";

import Button from "../components/button";

function Home(props) {
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
        />
      </div>

      <div>
        <table css={{ textAlign: "center", margin: "30px auto" }}>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          {props.wallet.map(wallet => {
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
      <div>
        <Button path="/add">Add</Button>
        <Button path="/report">Report</Button>
        <Button path="/report/idMonth">Report of the Month</Button>
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
