/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";

function Select(props) {
  return (
    <table>
      <tr>
        <th>Category</th>
        <th>Amount</th>
      </tr>
      {props.wallet.map(wallet => {
        return (
          <tr>
            <td>{wallet.category}</td>
            <td>{wallet.type ? `+ ${wallet.amount}` : `- ${wallet.amount}`}</td>
          </tr>
        );
      })}
    </table>
  );
}

function mapState(state) {
  return {
    whallet: state.whallet
  };
}

export default connect(
  mapState,
  null
)(Select);
