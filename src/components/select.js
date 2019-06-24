/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";

function Select(props) {
  let list;
  switch (props.name) {
    case "withdraw":
      list = props.withdraw;
      break;
    case "deposit":
      list = props.deposit;
      break;
    case "month":
      list = props.month;
      break;
    default:
      break;
  }

  return (
    <>
      <select name={props.name} id={props.name} defaultValue="selected">
        <option value="selected" disabled hidden>
          Choose {props.name}
        </option>
        {list.map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </>
  );
}

function mapState(state) {
  return {
    withdraw: state.type.withdraw,
    deposit: state.type.deposit,
    month: state.type.month
  };
}

export default connect(
  mapState,
  null
)(Select);
